"use client";
import { FormEvent } from "react";
import BackButton from "../BackButton/BackButton";
import css from "./PostForm.module.css";

const PostForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, subject, text, category } =
      form.elements as HTMLFormControlsCollection & {
        name: HTMLInputElement;
        subject: HTMLInputElement;
        text: HTMLTextAreaElement;
        category: HTMLSelectElement;
      };
    const res = await fetch(`https://krd-test-back.onrender.com/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        subject: subject.value,
        text: text.value,
        category: category.value,
      }),
    });
    const post = await res.json();
    form.reset();
    return post;
  };

  return (
    <div>
      <BackButton />
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="subject">Тема</label>
        <input type="text" id="subject" name="subject" />
        <label htmlFor="category">Категория</label>
        <select name="category" id="category">
          <option value={"ортопедия"}>ортопедия</option>
          <option value={"неврология"}>неврология</option>
          <option value={"дерматология"}>дерматология</option>
        </select>
        <label htmlFor="text">Текст</label>
        <textarea id="text" name="text"></textarea>
        <button type="submit">Создать пост</button>
      </form>
    </div>
  );
};

export default PostForm;
