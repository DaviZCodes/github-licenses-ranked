import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-6 mt-2 lg:mt-6">
      <a
        href="https://github.com/DaviZCodes/github-licenses-ranked"
        target="_blank"
      >
        <BsGithub size={50} color="#376cde" />
      </a>
      <p className="text-sm">
        For fellow developers, by&nbsp;
        <a
          className="underline text-custom-blue"
          href="https://github.com/DaviZCodes"
          target="_blank"
        >
          DaviZCodes
        </a>
      </p>
      <p className="text-sm">
        If you're interested in adding more features, please raise a pull
        request.
      </p>
    </div>
  );
}
