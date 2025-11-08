
interface MapEmbedProps {
  address: string;
}

export default function MapEmbed({ address }: MapEmbedProps) {
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(address)}`;

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${address}`}
      ></iframe>
    </div>
  );
}
