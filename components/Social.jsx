import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = [
    {icon: <FaLinkedin />, path: ''},
    {icon: <FaGithub />, path: ''},
    {icon: <FaTwitter />, path: ''},
    {icon: <FaInstagram />, path: ''},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
  <div className={containerStyles}>
    {Socials.map ((item, index)=> {
        return ( <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}
  </div>
  
  );
};

export default Social;