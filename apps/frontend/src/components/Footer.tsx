import { IconBrandGithub, IconBrandGithubFilled, IconBrandLinkedin, IconBrandTwitter, IconBrandTwitterFilled } from "@tabler/icons-react";
import Container from "./Container";
import Logo from "./icons/logo";

export default function Footer() {
  return (
    <footer className="border-t border-transparent-white py-14 mt-20">
      <Container className="flex justify-between">
        <div><Logo color="#fff" className="w-16 h-16 mr-4 text-white"/> Maga Site</div>
        <div className="flex gap-10 text-gray-400">
          <IconBrandTwitterFilled />
          <IconBrandGithubFilled />
          <IconBrandLinkedin />
        </div>
      </Container>
    </footer>
  )
}