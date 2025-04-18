import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggin={firstName:'Charan',lastName:'Raj B'}
  return (
    <main>
        <Sidebar user={loggin}/>
        {children}
    </main>
    
  );
}
