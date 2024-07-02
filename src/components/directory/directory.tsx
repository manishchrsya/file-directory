import { FC, useState } from "react";
import { IDirectory, directory } from "../../data/file-directory-data";

interface IFileDirectory {
  explorer: IDirectory;
}

export const FileDirectory: FC<IFileDirectory> = ({ explorer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="explorer">
      <div
        // style={{
        //   cursor: "pointer",
        //   width: "100%",
        // }}
        className="explorer-item"
        onClick={() => setIsOpen(!isOpen)}
      >
        {explorer.isFolder ? "🗂️" : "📄"} {explorer.name}
      </div>
      <div className="explorer">
        {isOpen &&
          explorer.items.map((item) => {
            return (
              <div style={{ paddingLeft: 25 }}>
                {<FileDirectory explorer={item} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};
