import React, { useEffect, useState } from "react";
import { Text } from "../ui-styles/Text";
import { Button } from "../components/Button";
import { Subject } from "@prisma/client";
import SubjectCard from "../components/SubjectCard";
import { useSubjects } from "@/app/context/context-calls";
import { ModalSubject } from "../components/ModalSubject";

const Subjects = () => {
  const { subjects, fetchSubjects } = useSubjects();

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <>
      <div className="md:w-full ml-0 sm:ml-[240px] ">
        <div className="flex flex-row justify-between">
          <Text title>Subjects</Text>
          <Button
            // @ts-ignore
            onClick={() => document.getElementById("my_modal_2")?.showModal()}
            css="mb-5 sm:mb-4"
          >
            + Add Subject
          </Button>
        </div>
        <nav className="w-full">
          <ul className="flex-row	flex border-sky-700/10 border-b-8	 p-2 gap-2 mb-4 font-sans text-base antialiased font-normal  text-gray-700">
            <Text par>By me</Text>
            <Text par>By others</Text>
            <Text par>All</Text>
          </ul>
        </nav>
        <div className="flex gap-3  flex-row flex-wrap">
          {subjects.map((subject: Subject) => (
            <SubjectCard
              name={subject.name}
              description={subject.description}
              href={`/subjects/${subject.id}`}
            />
          ))}
        </div>
      </div>
      <ModalSubject />
    </>
  );
};

export default Subjects;
