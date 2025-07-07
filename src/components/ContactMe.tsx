import type { JSX } from "react";
import {
  FaGithub,
  FaCodepen,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
type link = { href: string; icon: JSX.Element };
export default function ContactMe() {
  const links: link[] = [
    { href: "https://github.com/hady-bs", icon: <FaGithub className="icon" /> },
    {
      href: "https://codepen.io/abdAlhadyAlboshy",
      icon: <FaCodepen className="icon" />,
    },
    {
      href: "https://www.facebook.com/itshadyboshy",
      icon: <FaFacebookSquare className="icon" />,
    },
    { href: "mailto:aaa88484@gmail.com", icon: <MdEmail className="icon" /> },
    {
      href: "https://api.whatsapp.com/send?phone=963930085744",
      icon: <FaWhatsapp className="icon" />,
    },
  ];
  return (
    <div className=" sticky top-0 bg-primary py-10">
      <div className="text-4xl text-aura text-center animate-pulse py-10 ">
        Contact Me
      </div>
      <div className="flex flex-row gap-10 justify-center ">
        {links.map((link: link, index: number) => (
          <a
            href={link.href}
            key={index}
            className="hover:scale-120 hover:drop-shadow-[0px_0px_10px_var(--color-aura)] duration-300 "
            target="_blank"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
