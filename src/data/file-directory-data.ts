import { v4 } from "uuid";

export interface IDirectory {
  name: string;
  id: string;
  isFolder: boolean;
  items: IDirectory[];
}

export const directory: IDirectory = {
  name: "repo-root",
  id: v4(),
  isFolder: true,
  items: [
    {
      name: "repo-root",
      id: v4(),
      isFolder: true,
      items: [
        { name: "repo-root", id: v4(), isFolder: false, items: [] },
        {
          name: "repo-root",
          id: v4(),
          isFolder: true,
          items: [{ name: "repo-root", id: v4(), isFolder: false, items: [] }],
        },
      ],
    },
    {
      name: "repo-root",
      id: v4(),
      isFolder: true,
      items: [
        { name: "repo-root", id: v4(), isFolder: false, items: [] },
        {
          name: "repo-root",
          id: v4(),
          isFolder: true,
          items: [{ name: "repo-root", id: v4(), isFolder: false, items: [] }],
        },
      ],
    },
    {
      name: "repo-root",
      id: v4(),
      isFolder: true,
      items: [
        { name: "repo-root", id: v4(), isFolder: false, items: [] },
        {
          name: "repo-root",
          id: v4(),
          isFolder: true,
          items: [{ name: "repo-root", id: v4(), isFolder: false, items: [] }],
        },
      ],
    },
  ],
};
