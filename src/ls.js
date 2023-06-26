import { readdir } from "fs";

export const ls = () => {
  readdir(process.cwd(), { withFileTypes: true }, (error, items) => {
    if (error) {
      console.log(error);
    } else {
      items.forEach((item) => {
        delete item.path;
        let fileType = item[Object.getOwnPropertySymbols(item)[0]];
        if (fileType === 1) {
          item.type = "file";
        } else if (fileType === 2) {
          item.type = "directory";
        } else {
          item.type = "-";
        }
      });
      console.table(items.sort((a, b) => (a.type > b.type) ? 1: -1));
    }
  });
};
