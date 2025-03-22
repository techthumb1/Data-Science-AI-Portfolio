import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C3E50] text-white mt-10">
      <div className="container mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Jason Robinson. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/techthumb1" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/github.png" width={24} height={24} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/jasrobinson12" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/linkedin.png" width={24} height={24} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/jasonrob_" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/twitter.png" width={24} height={24} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}
