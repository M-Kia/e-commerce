import UploadImage from "@/components/common/UploadImage";
import SignInButton from "@/components/next-auth/SignInButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInButton />
      <UploadImage />
    </main>
  );
}
