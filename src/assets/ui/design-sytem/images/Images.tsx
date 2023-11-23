interface ImgProps {
  src: string;
  alt: string;
  className?: string;
}

export const Img = ({ src, alt, className }: ImgProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-cover object-center`}
    />
  );
};
