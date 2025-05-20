import type { Collection } from "tinacms";

const Author: Collection = {
  label: "Authors",
  name: "author",
  path: "content/authors",
  format: "json",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Avatar",
      name: "avatar",
      // @ts-ignore
      uploadDir: () => "authors",
    },
  ],
};
export default Author;
