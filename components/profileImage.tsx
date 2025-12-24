import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProfileImage() {
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
      src={
        resolvedTheme === "light"
          ? "/images/profile_light.jpg"
          : "/images/profile_dark.jpg"
      }
      alt="Igashi Michael"
      width={320}
      height={320}
      className="w-full h-full object-cover"
      priority
    />
  );
}
