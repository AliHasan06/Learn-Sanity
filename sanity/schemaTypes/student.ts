export const student = {
  name: "student",
  type: "document",
  title: "Student Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Student Name",
    },
    {
      name: "age",
      type: "number",
      title: "student age",
    },
    {
      name: "Gender",
      type: "string",
      title: "Gender",
      options: {
        list: [
          { value: "Male", title: "Male" },
          { value: "Female", title: "Female" },
          { value: "Other", title: "Other" },
        ],
        layout: "dropdown",
      },
    },
    {
        name:'image',
        type:'image',
        title:'Student Image',
    },
  ],
};
