import React from 'react';

interface FooterSection {
  title: string;
  links: { label: string; href: string; }[];
}

interface FooterLinksProps {
  section: FooterSection;
}

export default function FooterLinks({ section }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-amber-50">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="text-amber-200 hover:text-amber-50 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}