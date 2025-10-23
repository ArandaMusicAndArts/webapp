import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dashed">
      <div className="container mx-auto p-4">
        <p>
          Website is built by{" "}
          <Link href="https://ingo.au" className="underline" target="_blank">
            Ingo
          </Link>{" "}
          and is{" "}
          <Link
            href="https://github.com/ArandaMusicAndArtsProgram/webapp"
            className="underline"
            target="_blank"
          >
            open source
          </Link>
        </p>
      </div>
    </footer>
  );
}
