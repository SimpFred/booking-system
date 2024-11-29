import Link from "next/link";

interface ButtonProps {
  text: string;
  to: string;
}

const Button = ({ text, to }: ButtonProps) => {
  return (
    <Link href={to} className="btn btn-primary btn-wide">
      {text}
    </Link>
  );
};

export default Button;
