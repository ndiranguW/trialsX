import { Container } from "@/components";

const ProjectPage = () => {
  return (
    <>
      <Container className="flex justify-center">
        {/* consume github repo api */}
        <span>Incoming.</span>
        <div className="loading loading-ball"></div>
        <div className="loading loading-ball"></div>
        <div className="loading loading-ball"></div>
        <div className="loading loading-ball"></div>
      </Container>
    </>
  );
};

export default ProjectPage;
