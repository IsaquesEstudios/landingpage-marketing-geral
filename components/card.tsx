interface CardProps {
  title: string;
  text: string;
}

export default function Card({ title, text }: CardProps) {
  return (
    <div className="border-[1px] p-4 rounded-md border-[#FFDD02] ">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
