import { redirect } from "next/navigation";
export default function Home() {
  return redirect("/login"); // Redirect to the login page by default
}
