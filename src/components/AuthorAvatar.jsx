// components/AuthorAvatar.jsx
import Image from "next/image";
import Link from "next/link";

export default function AuthorAvatar() {
  return (
    <Image
      className="h-8 w-8 rounded-full"
      src={`../../logos/1.svg`}
      width={32}
      height={32}
      alt={"Science Maverick Logo"}
    />
  );
}
