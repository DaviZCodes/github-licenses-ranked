import PopularityRatingScale from "../components/PopularityRatingScale";
import StrictnessRatingScale from "../components/StrictnessRatingScale";
import { MdSavedSearch } from "react-icons/md";

export default function Definitions() {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-3xl font-semibold">Why do we use licenses?</h1>
        <div className="mb-6">
          Public repositories are used to share your software to the world.
          Without a license, your repository is copyrighted and not open-source
          by default. For your repository to truly be open-source, you have to
          license it so it can be used, modified, and distributed by others.
        </div>

        <h1 className="text-3xl font-semibold">Ranking System</h1>
        <div className="mb-6">
          Licenses are ranked under two categories: strictness and popularity.
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Strictness Ranking</h2>
          Strictness refers to how many requirements are needed to use a
          license. The strictness of a license is based on how many points it
          has.
          <div>
            <b>Conditions</b> are 15 points each and <b>Limitations</b> are 5
            points each.
          </div>
          <div className="sm:hidden">
            <br />1 being the most strict, and 14 being the least strict.
          </div>
          <div className="hidden sm:block">
            <StrictnessRatingScale />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Popularity Ranking</h2>
          Popularity refers to how common the license is.
          <div className="sm:hidden">
            <br />1 being the most popular, and 14 being the least popular.
          </div>
          <div className="hidden sm:block">
            <PopularityRatingScale />
          </div>
        </div>
      </div>

      <hr className="h-px my-6 bg-gray-200 dark:bg-gray-700" />

      <h1 className="text-3xl mb-6 font-semibold">Relevant Terms</h1>
      <div>
        <h2 className="font-bold">Use or Private Use?</h2>
        <p>
          “Use” or “Private Use” means running and interacting with the software
          on your computer. When you use a software, you test its text-inputs,
          buttons, and functionalities. If the repository is public, anyone can
          use the software as intended.
        </p>
        <br />
        <h2 className="font-bold">Modify</h2>
        <p>
          “Modify” means making changes, additions, or deletions to the original
          code. This can involve fixing bugs, adding new features, installing
          and updating packages, or migrating frameworks.
        </p>
        <br />
        <h2 className="font-bold">Distribute</h2>
        <p>
          Distributing means sharing the software to others. This can be done
          privately (e.g. with a friend) or publicly (e.g. on a public domain).
          Distribution methods include USB drives, SD cards, DVDs, Dropbox,
          email, and more.
        </p>
        <br />
        <h2 className="font-bold">Distribute commercially</h2>
        <p>
          Distributing commercially means sharing or selling the software to
          others for money. It can be offering the software as a service or
          selling it. Example: Steam selling video games on their platform is a
          form of commercial distribution.
        </p>
        <br />
        <h2 className="font-bold">License and copyright notice</h2>
        <p>
          The license, usually found as the “LICENSE” or “LICENSE.txt” file,
          declares the permissions and restrictions regarding the use,
          modification, and distribution of the software. The copyright notice
          includes the copyright symbol ©, the year of publication, and the name
          of the copyright holder. It protects the code by informing others
          about the original author.
        </p>
        <br />
        <h2 className="font-bold">Condition</h2>
        <p>
          A condition is a requirement that the user must comply with to use,
          modify, or distribute the software. If the user does not comply with
          the license conditions, the user will lose the rights granted by the
          license.
        </p>
        <br />
        <h2 className="font-bold">Limitation</h2>
        <p>
          A limitation specifies the constraints of the software, indicating
          what the user cannot do with it.
        </p>
        <br />
        <h2 className="font-bold">Sublicense</h2>
        <p>
          A sublicense is a secondary license given to another party, allowing
          the user to use, modify, or distribute software based on terms
          different from the primary license.
        </p>
        <br />
        <h2 className="font-bold">Compatibility</h2>
        <p>
          Compatibility is the ability to combine code under multiple licenses
          without violating any guidelines.
        </p>
        <br />
        <h2 className="font-bold">Liability</h2>
        <p>
          Liabilities are the legal consequences for actions or damages by the
          software. Example: A software developer being held responsible for
          damages caused by data leaks.
        </p>
        <br />
        <h2 className="font-bold">Warranty</h2>
        <p>
          A warranty is an assurance about the software’s quality, features, and
          performance. It represents the promises made to the user regarding
          what the software will do. Example: YouTube’s warranty assures its
          users that they can upload videos to their platform as long as they
          adhere to their guidelines.
        </p>
        <br />
        <h2 className="font-bold">Trademark</h2>
        <p>
          A trademark is a unique symbol, brand, or logo that represents the
          software. Trademark licenses are permissions granted by the owner,
          allowing another party to use the trademark in their own code. This
          allows other parties to show how they are related to a brand. Example:
          Microsoft and OpenAI have trademark policies to safeguard their
          trademarks.
        </p>
      </div>
      <br />
      <br />
      <p className="text-center text-sm">
        Please note that I am not a lawyer nor a legal representative. For legal
        advice, seek a lawyer or read official documentation.
      </p>

      <hr className="h-px my-6 bg-gray-200 dark:bg-gray-700" />

      <div>
        <a
          href="https://docs.google.com/document/d/1-iByvxa3zH74qIAm-iySY7CW7f-Qz2qRhf7noo-ADEw/edit?usp=sharing"
          target="_blank"
        >
          <h1 className="text-3xl mb-6 font-semibold">Research Document</h1>
          <div className="flex">
            <MdSavedSearch size={60} color="#376cde" />
            Here is the research I made to determine the strictness and
            popularity of each GitHub License. I used numerous trustworthy
            sources to back up my decisions.
          </div>
        </a>
      </div>
    </div>
  );
}
