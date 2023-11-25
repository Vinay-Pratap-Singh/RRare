import comingSoon from "@/app/assets/comingSoon.jpg";
import instagram from "@/app/assets/instagram.png";
import youtube from "@/app/assets/youtube.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <Image width={500} src={comingSoon} alt="coming soon" />

      {/* for social media icons */}
      <div className="flex items-center gap-5">
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href={
            "https://instagram.com/rrudraofficial?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
          }
        >
          <Image width={40} src={instagram} alt="instagram icon" />
        </Link>
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          href={"https://youtube.com/@RRudra01?si=F0eiLiSuW8FFYXVY"}
        >
          <Image width={40} src={youtube} alt="youtube icon" />
        </Link>
      </div>
    </main>
  );
}
