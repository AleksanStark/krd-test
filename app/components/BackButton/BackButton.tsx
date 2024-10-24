"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.length > 1) router.back();
    else {
      router.push("/");
    }
  };
  return <button onClick={handleBack}>Назад</button>;
};
export default BackButton;
