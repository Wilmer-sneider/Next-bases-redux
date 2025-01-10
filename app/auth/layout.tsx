import NavbarComponent from "@/components/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarComponent />
      {children}
    </div>
  );
}
