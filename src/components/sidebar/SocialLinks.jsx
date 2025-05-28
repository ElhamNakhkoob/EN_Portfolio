import GithubIcon from "../../assets/images/github(1).png";
import LinkedinIcon from "../../assets/images/linkedin.png";
import XingIcon from "../../assets/images/xing.png";

const socialData = [
  {
    href: "https://github.com/yourusername",
    icon: GithubIcon,
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: LinkedinIcon,
    alt: "LinkedIn",
  },
  {
    href: "https://www.xing.com/profile/yourusername",
    icon: XingIcon,
    alt: "Xing",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {socialData.map(({ href, icon, alt }) => (
        <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={alt} className="w-6 h-6 hover:opacity-80" />
        </a>
      ))}
    </div>
  );
}
