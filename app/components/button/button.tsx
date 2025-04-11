import Link from 'next/link';

export default function Button() {
  return (
    <div>
      <Link href="/triviaPage">
        <button className="button">{typeof window !== 'undefined' && window.location.pathname === '/triviaPage' ? 'Start Playing' : 'Play again'}</button>
      </Link>
    </div>
  );
}
