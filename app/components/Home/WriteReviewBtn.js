'use client'
import { useRouter } from 'next/navigation';

const WriteReviewBtn = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/signup?callbackUrl=/review');
    };

    return <button onClick={handleClick}>Sign In to Review</button>;
};

export default WriteReviewBtn;