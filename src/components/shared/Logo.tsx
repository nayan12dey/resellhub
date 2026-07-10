import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link 
      href="/" 
      className={`text-2xl font-bold text-blue-600 transition-colors duration-200 hover:text-blue-700 ${className}`}
    >
      🛍️ ResellHub
    </Link>
  );
};

export default Logo;