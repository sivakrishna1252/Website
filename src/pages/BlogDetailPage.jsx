import { useParams, Link } from 'react-router-dom';
import { mockBlogPosts } from '../data/mockBlogPosts';
import './BlogDetailPage.css';

function BlogDetailPage() {
  const { id } = useParams();
  const post = mockBlogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <h1>Post Not Found</h1>
          <Link to="/blog" className="btn">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get related posts (exclude current post)

  return (
    <div className="blog-detail-page">
      <div className="container">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        
        <article className="blog-post">
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-category">{post.category}</span>
            </div>
            <h1>{post.title}</h1>
            <div className="blog-post-submeta">
              <span className="blog-date">{formatDate(post.publishedDate)}</span>
              <p className="blog-author">By {post.author}</p>
            </div>
          </header>

          <div className="blog-post-image">
            <img src={post.featuredImage} alt={post.title} />
          </div>

          <div className="blog-post-content">
            <p>{post.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div className="blog-post-tags">
       
            <div className="tags-list">
             
              
              
            </div>
          </div>
        </article>

        
        
      </div>
    </div>
  );
}

export default BlogDetailPage;