// app/api/auth/[...nextauth]/route.js
import dbConnect from '@/app/lib/mongodb';
import User from '@/app/Models/User';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'your-email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        // If user is not found, throw a specific error
        if (!user) {
          throw new Error('No account found with this email');
        }

        // If password does not match, throw a specific error
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          throw new Error('Password does not match');
        }

        // If everything is correct, return user data
        return { id: user._id, name: user.name, email: user.email, image: user.image, role: user.role };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect();

      if (account.provider === 'google') {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          // Create a new user if they don't exist
          await User.create({
            name: user.name || 'Unknown',
            email: user.email,
            image: user.image || '',
            role: 'user',
          });
        }
      }

      return true; // Continue the sign-in process
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        const dbUser = await User.findOne({ email: user.email });
        token.id = dbUser._id.toString();
        token.role = dbUser.role;
        token.image = dbUser.image;
        token.name = dbUser.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.image = token.image;
      session.user.name = token.name;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return '/';
    },
  },
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Create the NextAuth handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

