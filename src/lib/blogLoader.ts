import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  heroImage: string;
  date: string;
  author: string;
  slug: string;
  content: string;
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/content/blogs/getting-started-with-gradespark.md');
    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.statusText}`);
    }
    const fileContent = await response.text();
    const { data, content } = matter(fileContent);

    const blog = {
      id: 'getting-started-with-gradespark',
      title: data.title,
      excerpt: data.excerpt,
      heroImage: data.heroImage,
      date: data.date.toISOString(),
      author: data.author,
      slug: 'getting-started-with-gradespark',
      content
    };

    return [blog];
  } catch (error) {
    console.error('Error loading blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/content/blogs/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.statusText}`);
    }
    const fileContent = await response.text();
    const { data, content } = matter(fileContent);

    return {
      id: slug,
      title: data.title,
      excerpt: data.excerpt,
      heroImage: data.heroImage,
      date: data.date.toISOString(),
      author: data.author,
      slug,
      content
    };
  } catch (error) {
    console.error(`Error loading blog ${slug}:`, error);
    return null;
  }
}