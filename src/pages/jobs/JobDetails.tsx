import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../api";
import NavbarToSession from "../../components/Nav/NavbarToSession";

export default function JobDetails(): JSX.Element {
  const [job, setJob]: [any, Function] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    get("/jobs/" + id).then((res: any) => setJob(res.data));
  }, []);

  console.log(job);

  return (
    <>
      <NavbarToSession />
      <main className=" max-w-screen-xl mx-auto pt-20">
        <section>
          {job &&
            <>
              <div className=" flex items-center ">
                <h1 className=" text-3xl font-medium mb-10">{job.title}</h1>
                <p className=" ml-auto text-xl font-medium  bg-blue-300 py-3 px-10 rounded-full">${job.monthlySalary}</p>
              </div>

              <p className=" mb-10">Numero de aplicantes: { job.aplicants?.length}</p>

              <section className=" mb-10">
                <h3 className=" text-lg mb-4 font-medium">Location:</h3>
                {<p>{job.location?.state}, {job.location?.country}</p>}
              </section>

              <section className="mb-10">
                <h3 className=" text-lg mb-4 font-medium">Descripción del puesto:</h3>
                <p>{job.description}</p>
              </section>

              
              <section className="mb-10">
                <h3 className=" text-lg mb-4 font-medium">Requerimientos:</h3>
                <ul>
                  {job.requirements?.map((item:any) => <li> - {item}</li>)}
                </ul>
              </section>

              <section className="mb-10">
                <h3 className=" text-lg mb-4 font-medium">Oferta laboral:</h3>
                <ul>
                  {job.jobOffer?.map((item:any) => <li> - {item}</li>)}
                </ul>
              </section>
            </>
          }
        </section>
      </main>
    </>
  );
}
