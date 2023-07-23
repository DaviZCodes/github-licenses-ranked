import NavBar from "../components/NavBar"

export default function Definitions() {
    return (
      <main>
        <NavBar/>
        <h1 className = "">Definitions</h1>
        <div>
          <h2 className = "font-bold">Use or Private Use?</h2>
          “Use” or “Private Use” means running and interacting with the software on your computer. 
          When you use a software, you test its text-inputs, buttons, and functionalities. If the repository is public, anyone can use the software as intended. 

          <h2 className = "font-bold">Modify</h2>
          “Modify” means making changes, additions, or deletions to the original code. 
          This can involve fixing bugs, adding new features, installing and updating packages, or migrating frameworks. 

          <h2 className = "font-bold">Distribute</h2>
          Distributing means sharing the software to others. This can be done privately (e.g. with a friend) or publicly (e.g. on a public domain). 
          Distribution methods include USB drives, SD cards, DVDs, Dropbox, email, and more. 

          <h2 className = "font-bold">Distribute commercially</h2>
          Distributing commercially means sharing or selling the software to others for money. It can be offering the software as a service or selling it. 
          Example: Steam selling video games on their platform is a form of commercial distribution. 

          <h2 className = "font-bold">License and copyright notice</h2>
          The license, usually found as the “LICENSE” or “LICENSE.txt” file, declares the permissions and restrictions regarding the use, modification, and distribution of the software. The copyright notice includes the copyright symbol ©, the year of publication, and the name of the copyright holder. It protects the code by informing others about the original author. 

          <h2 className = "font-bold">Sublicense</h2>
          A sublicense is a secondary license given to another party, allowing the user to use, modify, or distribute software based on terms different from the primary license.

          <h2 className = "font-bold">Compatibility</h2>
          Compatibility is the ability to combine code under multiple licenses without violating any guidelines. 

          <h2 className = "font-bold">Liability</h2>
          Liabilities are the legal consequences for actions or damages by the software. 
          Example: A software developer being held responsible for damages caused by data leaks. 

          <h2 className = "font-bold">Warranty</h2>
          A warranty is an assurance about the software’s quality, features, and performance. It represents the promises made to the user regarding what the software will do. 
          Example: YouTube’s warranty assures its users that they can upload videos to their platform as long as they adhere to their guidelines. 

          <h2 className = "font-bold">Trademark</h2>
          A trademark is a unique symbol, brand, or logo that represents the software. Trademark licenses are permissions granted by the owner, allowing another party to use the trademark in their own code. This allows other parties to show how they are related to a brand. 
          Example: Microsoft and OpenAI have trademark policies to safeguard their trademarks. 
        </div>
      </main>
    )
  }
  