import { BreadCrumb, Container } from "./components";

export default function Home() {
  return (
    <>
      <Container>
        <h1>Hello,</h1>
        <p>I am Willbeckh</p>
        <p>Fullstack software engineer</p>
        <p>
          Currently working @ <span className="underline">#companyTitle</span>
        </p>
      </Container>
    </>
  );
}
