import DrawerPost from "../components/post/DrawerPost";
import DrawerCategory from "../components/category/DrawerCategory";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-20 grid gap-y-4">
      <div className="flex justify-center mb-4">
        <p className="text-[10px] text-white text-center bg-cprimary/50 border rounded-full p-4 w-fit">Made by Romain V.</p>
      </div>
      

      <p className="text-4xl text-center font-bold">
        NestImmo, la <span className="text-cprimary">nouvelle</span> plateforme pour les agences <br/>
        <span className="text-cprimary">immobilières.</span>
      </p>

      <div className="flex justify-center gap-x-4 mt-8">
        <DrawerPost />
        <DrawerCategory />
      </div>

      <Link className="flex gap-x-2 justify-center hover:underline hover:underline-offset-4 hover:text-cprimary" href='https://github.com/roroelrigolo/dc5dev-nestimmo-front'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Voir de code
      </Link>

    </div>
  );
}
