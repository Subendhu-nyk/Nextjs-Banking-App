import MobileNav from "@/components/mobile-navbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstName:'Sam',lastName:'Jsm'}
  return (   
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn}/>
            <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src='/icons/BankCardLogo.png' width={30} height={30} alt='menu-icon' />
                <div >
                <MobileNav user={loggedIn}/>
                </div>
              </div> 
              {children}             
            </div>
           
        </main>   
  );
}
