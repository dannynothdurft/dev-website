"use client";
/* 
    File: /components/hero/index.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import Image from "next/image";
import HomeLang from "@/lang/de/homepage.json";

const Hero = () => {
  return (
    <section className="hero-component mb-2">
      <div className="container flex center">
        <div className="flex col w-600">
          <Image
            className="profile-image"
            src={HomeLang.hero.profileImage.src}
            alt={HomeLang.hero.profileImage.alt}
            title={HomeLang.hero.profileImage.title}
            width={120}
            height={120}
          />
          <h1>{HomeLang.hero.headingTitle}</h1>
          <p>{HomeLang.hero.headingContent}</p>
        </div>

        <Image
          className="header-image"
          src={HomeLang.hero.setupImage.src}
          alt={HomeLang.hero.setupImage.alt}
          title={HomeLang.hero.setupImage.title}
          width={500}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
