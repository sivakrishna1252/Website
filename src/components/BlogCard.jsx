import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <article className="blog-card">
      <Link to={`/blog/${post.id}`} className="blog-card-link">
        <div className="blog-card-image">
          <img src={post.featuredImage} alt={post.title} loading="lazy" />
        </div>
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">{formatDate(post.publishedDate)}</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;