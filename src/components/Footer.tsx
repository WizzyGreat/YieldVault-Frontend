/**
 * App footer with a short note and a disclaimer. Static content only.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} YieldVault · Built on Stellar Soroban</span>
      <span className="footer-note">
        Demo app with mock data — not financial advice.
      </span>
    </footer>
  );
}
