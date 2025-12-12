import { mockBlogPosts } from '../data/mockBlogPosts';
import BlogCard from '../components/BlogCard';
import './BlogPage.css';

function BlogPage() {
  return (
    <div className="blog-page">
      <div className="container">
        <section className="blog-header section">
          <h1 className="section-title">Our Blog</h1>
          <p className="blog-intro">
            Insights, tips, and inspiration for planning your next event.
            Stay updated with the latest trends and best practices in event management.
          </p>
        </section>

        <section className="blog-list section">
          <div className="blog-grid grid grid-3">
            {mockBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BlogPage;