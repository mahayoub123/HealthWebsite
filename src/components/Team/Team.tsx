import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Team: React.FC = () => {
  const team = useSelector((state: RootState) => state.team);

  return (
    <section className="bg-[#fff] text-gray-800 py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {team.map((team) => (
          <div
            key={team.id}
            className="bg-[#fff] p-[50px] rounded-xl hover:scale-105 transition "
          >
            <div className="bg-[#fff]">
              <div className=" items-center mb-2">
                <img
                  src={team.image}
                  alt={team.title}
                  className="w-[376px] h-[470px] object-contain "
                />
              </div>
              <h3 className="font-urb text-lg font-semibold">{team.title}</h3>
              <p className="text-gray-800 text-sm font-urb">{team.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
