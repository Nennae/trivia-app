import Link from 'next/link';

export default function Button() {
  return (
    <div>
      <Link href="/triviaPage">
        <button className="button">Start Playing</button>
      </Link>
    </div>
  );
}
