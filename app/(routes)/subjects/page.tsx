"use client";

import Sidebar from "@/app/components/Sidebar";
import Container from "@/app/components/Container";
import Subjects from "@/app/screens/Subjects";

const SubjectsPage = () => {
  return (
    <>
      <Sidebar id={""} menu />
      <Container>
        <Subjects />
      </Container>
    </>
  );
};
export default SubjectsPage;
