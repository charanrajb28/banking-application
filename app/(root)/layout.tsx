import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const login={
    $id: "user_002",
    email: "charanrajb282004@gmail.com",
    userId: "charanraj_001",
    dwollaCustomerUrl: "https://api.dwolla.com/customers/charanraj_001",
    dwollaCustomerId: "charanraj_001",
    firstName: "Charan Raj",
    lastName: "B",
    address1: "42 Galaxy Avenue",
    city: "Bengaluru",
    state: "KA",
    postalCode: "560001",
    dateOfBirth: "2004-08-28",
    ssn: "4321"
  }
  ;
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={login}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu"/>
            <div>
              <MobileNav user={login}/>
            </div>
          </div>
        {children}
        </div>
    </main>
    
  );
}
