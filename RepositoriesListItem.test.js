import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";

test("check whether there is link for github profiles", () => {
  const repository = {
    full_name: "react",
    language: "JavaScript",
    description: "Project by FaceBook",
    owner: "Brian  Holt",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };

  render(<RepositoriesListItem repository={repository} />);
});
