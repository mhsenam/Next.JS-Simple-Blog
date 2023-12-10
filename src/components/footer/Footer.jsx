import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 Newsim made with ❤️ by Mohsen Amini. All rights reserved </div>
      <div className={styles.imgContainer}>
        <Link href="https://github.com/mhsenam" target="_blank">
          <Image
            className={styles.imgLink}
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            width={25}
            height={25}
            alt="github_logo"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/mhsenam/" target="_blank">
          <Image
            className={styles.imgLink}
            src="/linkedin.png"
            width={26}
            height={26}
            alt="linkedin_logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
