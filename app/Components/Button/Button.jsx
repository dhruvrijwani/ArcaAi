import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "outline", // outline | filled
  size = "md",         // sm | md | lg
  bgColor,
  textColor,
  borderColor,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      style={{
        ...(bgColor && { "--btn-bg": bgColor }),
        ...(textColor && { "--btn-text": textColor }),
        ...(borderColor && { "--btn-border": borderColor }),
      }}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
