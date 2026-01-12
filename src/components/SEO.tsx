import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = ({ title = 'Link2Video - Universal Video Player', description = 'Play any video link instantly. Supports MP4, HLS, m3u8 and more.' }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="video.other" />
      <meta property="og:site_name" content="Link2Video" />
      <meta name="theme-color" content="#6366f1" />
    </Helmet>
  );
};
