import logo from '@/public/logoUpdated.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <div className="relative w-40 h-16">
          <Image
            src={logo}
            fill
            priority
            alt="Logo"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

      </Link>
    </div>
  );
}

