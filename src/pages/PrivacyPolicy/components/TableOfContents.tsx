interface TableOfContentsProps {
  items: Array<{
    id: string;
    title: string;
  }>;
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without causing navigation
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
      <nav className="space-y-2">
        {items.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(id, e)}
            className="block text-blue-600 hover:underline cursor-pointer"
          >
            {title}
          </a>
        ))}
      </nav>
    </section>
  );
}