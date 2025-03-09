import { BlogCardsContent, Post as SanityPost } from "@/sanity.types";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import DateComponent from "@/app/components/Date";

// Define expanded author type
type Author = {
  firstName: string;
  lastName: string;
  picture?: {
    asset?: {
      _ref: string;
    };
  };
};

// Define expanded post type
type Post = Omit<SanityPost, 'author'> & {
  author?: Author;
};

// Extended type for BlogCardsContent with expanded posts
type ExtendedBlogCardsContent = Omit<BlogCardsContent, 'posts'> & {
  posts?: Post[];
};

type BlogCardsProps = {
  block: ExtendedBlogCardsContent;
  index: number;
};

export default function BlogCards({ block }: BlogCardsProps) {
  const { title, description, posts = [] } = block;
  
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-md text-gray-500">
              {description}
            </p>
          )}
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <li key={post._id || i}>
              <Link 
                href={`/posts/${post.slug}`}
                className="group block overflow-hidden"
              >
                <div className="relative h-[350px] w-full overflow-hidden bg-gray-200 sm:h-[450px]">
                  {post.coverImage?.asset?._ref && (
                    <Image
                      src={urlForImage(post.coverImage)?.url() || ''}
                      alt={post.coverImage?.alt || post.title || 'Blog post image'}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {post.title}
                  </h3>
                  {post.date && (
                    <p className="mt-2">
                      <span className="tracking-wider text-gray-900">
                        <DateComponent dateString={post.date} />
                      </span>
                    </p>
                  )}
                  {post.author && (
                    <p className="mt-1 text-xs text-gray-500">
                      By {post.author.firstName} {post.author.lastName}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
