import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';

/**
 * Catch-all 404 page for unknown routes.
 */
export default function NotFound() {
  return (
    <EmptyState
      icon="🧭"
      title="Page not found"
      message="The page you are looking for does not exist."
      action={
        <Link to="/" className="btn btn-primary">
          Go home
        </Link>
      }
    />
  );
}
