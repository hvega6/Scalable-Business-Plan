interface SectionImageComponentProps {
  imageDescription: string;
  imageSrc?: string;
}

export const SectionImageComponent: React.FC<SectionImageComponentProps> = ({
  imageDescription,
  imageSrc,
}) => {
  return (
    <div className="w-full">
      <img
        className="aspect-video w-full object-cover"
        src={
          imageSrc ||
          "https://images.unsplash.com/photo-1707420257112-03d82b284001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={imageDescription}
      />
    </div>
  );
};
