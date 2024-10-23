import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.length > 1) router.back();
    else {
      router.push("/");
    }
  };
  return <Button onClick={handleBack}>Назад</Button>;
};
export default BackButton;
