import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = [
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/disha-malviya-104ba023a/'},
    {icon: <FaGithub />, path: 'https://github.com/Dishamalviya'},
    {icon: <FaTwitter />, path: 'https://x.com/DishaMalviya_11'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/disha_146_/'},
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