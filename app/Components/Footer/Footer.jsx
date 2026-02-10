import Image from "next/image";
import styles from "./Footer.module.css";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Logo from "@/public/Logo/Black_logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.logo}>
            <Link href="/#hero" aria-label="Arca Ai Logo">
            <Image
              src={Logo}
              alt="Arca Ai"
              priority
            />
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.socials}>
              <Link href="#" aria-label="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter size={18} />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook size={18} />
              </Link>
            </div>

            <p className={styles.copy}>
              © 2025 BCM. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
}