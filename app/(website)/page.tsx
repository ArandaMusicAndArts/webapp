import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-4">
        <div className="prose md:prose-lg dark:prose-invert max-w-none">
          <h2>The Program</h2>
          <p>
            The Aranda Music & Arts program provides affordable school-based
            music, drama, and art tuition for students attending Aranda Primary
            School (K to Y6).
          </p>
          <p>
            Classes operate between the hours of 3:30-6pm, Monday-Friday, during
            the school term.
          </p>
          <p>
            While the content of the program changes from year to year, its
            purpose remains the same – to enrich children’s lives through the
            arts.
          </p>
          <h2>Activities</h2>
          <h3>Group Lessons</h3>
          <ul>
            <li>Introduction to Music (K-Y1) ($20/lesson)</li>
            <li>Continuing Music (Y1-Y2) ($20/lesson)</li>
            <li>Drawing (Y3-Y6, younger children considered) ($27/lesson)</li>
          </ul>
          <h3>Individual Lessons ($37/30 minute lesson)</h3>
          <ul>
            <li>Guitar</li>
            <li>Violin</li>
            <li>Piano</li>
          </ul>
          <h2>More</h2>
          <p>For our current vacancies, see the latest school newsletter.</p>

          <p>
            We have a fantastic team of highly skilled tutors who can cater for
            your child’s artistic needs.
          </p>

          <p>
            We also hold a recital evening in Term 3 at which the children take
            great pride in showing off what they have achieved.
          </p>

          <p>
            In 2023, families will not be charged an enrolment fee (usually $40
            annual registration for one child, or $75 for two or more).
          </p>

          <p>
            The Program is run by a group of volunteers who form a sub-committee
            of the P & C Association. We are always grateful for any help we can
            get. If you can donate some of your time to contribute to this
            valued Program, please click here.
          </p>

          <p>
            Classes are only available to students attending Aranda Primary
            School (not preschool).
          </p>

          <p>
            Drop off and pick up policy: Parents should drop their children to
            the classroom and collect their children promptly after lessons.
            Students who attend Aranda After School Care will be
            collected/returned by the tutor.
          </p>

          <p>
            If you require After School Care please contact Aranda Afters for a
            separate enrolment form.
          </p>
        </div>
      </div>
    </>
  );
}
