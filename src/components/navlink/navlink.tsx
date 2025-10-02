import Link from "next/link";

export function NavLink(props: { path: string; text: string }) {
  return (
    <Link href={props.path} className="hover:text-[#12F7D6]">
      {props.text}
    </Link>
  );
}
