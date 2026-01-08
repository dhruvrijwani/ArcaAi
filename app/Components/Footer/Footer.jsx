import Image from "next/image";
import styles from "./Footer.module.css";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Logo from "@/public/Logo/Black_logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt="Arca Ai"
              priority
            />
          </div>
          <div className={styles.right}>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>

            <p className={styles.copy}>
              © 2025 BCM. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
}