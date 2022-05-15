import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { get, put } from "../../api";
import PersonalInf from "../../components/Dashboard/PersonalInf";
import NavbarToSession from "../../components/Nav/NavbarToSession";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Dashboard(): JSX.Element {
  const [user, setUser]: any = useState([]);
  const [newSkill, setNewSkill]: [boolean, Function] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    get("/cv/" + localStorage.getItem("id")).then((res: any) =>
      setUser(...res.data)
    );
  }, []);

  const skill: MutableRefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement | null>(null);

  const addSkill = () => {
    put("/cv/update/skills/" + user._id, { new: skill.current?.value });
    setNewSkill(false);
  };

  const navigation = () => {
    navigate('/dashboard/newcv')
  }

  return (
    <>
      <NavbarToSession />
      {user ? (
        <main className=" bg-gray-100 pt-10 ">
          <div className=" bg-white w-[80%] mx-auto p-16">
            <h1 className=" text-4xl font-medium mb-10 text-gray-600">
              {" "}
              Curriculum{" "}
            </h1>
            {user.idUser && <PersonalInf personalInf={user.idUser} />}

            <h4 className=" text-2xl font-medium mb-5">Perfil profesional</h4>
            <section className="mb-5">
              <h5>{user.professionalProfile?.title}</h5>
              <p>{user.professionalProfile?.description}</p>
            </section>
            <h4 className=" text-2xl font-medium mb-5">Skills</h4>
            <section className=" flex gap-2 mb-10 flex-wrap">
              {user.habilities?.map((item: string) => {
                return (
                  <span className="text-white font-medium opacity-70 bg-blue-300 py-2 px-4 rounded-full">
                    {item}
                  </span>
                );
              })}
              {!newSkill ? (
                <span
                  className="text-white font-medium opacity-70 bg-blue-500 py-2 px-4 rounded-full cursor-pointer hover:opacity-100"
                  onClick={() => {
                    setNewSkill(!newSkill);
                  }}
                >
                  +Add
                </span>
              ) : (
                <>
                  <input
                    placeholder="New"
                    name="new"
                    type="text"
                    ref={skill}
                    className="w-20 outline-none py-0 border-[1px] rounded-full px-2 text-center"
                  />
                  <button onClick={addSkill}>
                    <AiFillCheckCircle className=" text-emerald-600" />
                  </button>
                  <button
                    onClick={() => {
                      setNewSkill(!newSkill);
                    }}
                  >
                    <AiFillCloseCircle className=" text-red" />
                  </button>
                </>
              )}
            </section>
            <h4 className=" text-2xl font-medium mb-5">Idiomas</h4>
            <section className=" flex gap-2 mb-5">
              {user.languages?.map((item: string) => {
                return (
                  <span className="text-white font-medium opacity-70 bg-blue-300 py-2 px-4 rounded-full">
                    {item}
                  </span>
                );
              })}
            </section>
            <h4 className=" text-2xl font-medium mb-5">Estudios</h4>
            <section className=" flex flex-col gap-2">
              {user.studies?.map((item: any) => {
                return (
                  <>
                    <p className=" text-base font-medium">{item.nameSchool}</p>
                    <p>{item.levelStudy}</p>
                    
                  </>
                );
              })}
            </section>
          </div>
        </main>
      ) : (
        <main className=" h-screen flex justify-center items-center flex-col">
          <h1 className=" text-2xl mb-10 text-gray-700">
            No existe un CV asignado
          </h1>

          <button className=" bg-blue-600 px-20 py-2 text-white rounded-full hover:opacity-90" onClick={navigation}>
            Crea un CV
          </button>
        </main>
      )}
    </>
  );
}
