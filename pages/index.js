import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Chill trip planner</h1>
      <h2>Hi there!</h2>
      <Link href="/trips" passHref legacyBehavior>
        Klick me to see your chill trips!
      </Link>
    </>
  );
}
