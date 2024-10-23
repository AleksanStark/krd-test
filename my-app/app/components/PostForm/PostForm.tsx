import { Button, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useFormik } from "formik";

const PostForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      text: "",
      category: "",
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
      const res = await fetch(`https://krd-test-back.onrender.com/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const post = await res.json();
      return post;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormLabel htmlFor="name">Имя</FormLabel>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <FormLabel htmlFor="subject">Тема</FormLabel>
      <Input
        id="subject"
        name="subject"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.subject}
      />
      <FormLabel htmlFor="text">Текст</FormLabel>
      <Textarea
        id="text"
        name="text"
        onChange={formik.handleChange}
        value={formik.values.text}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default PostForm;
