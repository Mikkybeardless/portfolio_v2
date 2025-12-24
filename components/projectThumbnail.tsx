import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Thumbnail({
  imageurl,
}: {
  imageurl: { dark: string; light: string };
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder
  }
  return (
    <Image
      src={resolvedTheme === "dark" ? imageurl.dark : imageurl.light}
      alt="Background image"
      fill
      className="object-cover object-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
    />
  );
}
