import Link from 'next/link';

export default function Button() {
  return (
    <div>
      <Link href="/triviaPage">
        <button className="button">{typeof window !== 'undefined' && window.location.pathname === '/triviaPage' ? 'Play Aagin' : 'Start Playing'}</button>
      </Link>
    </div>
  );
}
