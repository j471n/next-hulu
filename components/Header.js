import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between h-auto items-center">
      <div className="flex flex-grow justify-evenly w-full sm:w-auto sm:max-w-2xl ">
        <HeaderItem title="Home" Icon={HomeIcon} route={ () => router.push("/")}/>
        <HeaderItem title="trending" Icon={LightningBoltIcon} />
        <HeaderItem title="verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="collections" Icon={CollectionIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      <Image
        src="https://rb.gy/c2bmfl"
        className="object-contain"
        alt=""
        width={200}
        height={100}
        onClick={() => router.push("/")}
      />
    </header>
  );
}
