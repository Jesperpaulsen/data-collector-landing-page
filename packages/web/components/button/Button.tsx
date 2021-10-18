import classnames from "classnames";
import styles from "./button.module.css";
import Link from "next/link";

interface Props {
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  block?: boolean;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  small,
  outline,
  block,
  href,
}) => {
  return href ? (
    <Link href={href} passHref>
      <a
        className={classnames(styles["btn"], {
          [styles["btn--outline"]]: outline,
          [styles["btn--small"]]: small,
          [styles["btn--block"]]: block,
        })}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      onClick={() => (onClick ? onClick() : null)}
      className={classnames(styles["btn"], {
        [styles["btn--outline"]]: outline,
        [styles["btn--small"]]: small,
        [styles["btn--block"]]: block,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
