"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Member {
  name: string;
  img: string;
  role: string;
  major?: string;
  bio?: string;
  link?: string;
  id?: string;
}

interface TeamData {
  principleinvestigators: Member[];
  labmanagers: Member[];
  memeSat: Member[];
  memeSatMembers: Member[];
  moci: Member[];
  mociMembers: Member[];
  cosmo: Member[];
  cosmoMembers: Member[];
  labops: Member[];
  labopsMembers: Member[];
  rnd: Member[];
  rndMembers: Member[];
  dataTeam: Member[];
  dataMembers: Member[];
  LEARNSatTeam: Member[];
  LEARNSatMembers: Member[];
  interns: Member[];
  graduatestudents: Member[];
  associatedfaculty: Member[];
}

function ProfileCard({ member }: { member: Member }) {
  const imgSrc = member.img
    ? `/images/SSRLProfiles/${member.img}`
    : "/images/SSRLProfiles/default.png";

  const card = (
    <div className="flex flex-col justify-center items-center w-[180px] h-[180px] mb-5">
      <img
        src={imgSrc}
        alt={member.name}
        className="h-[120px] w-[120px] rounded-full object-cover object-top mb-[10px]"
      />
      <span
        className="text-[#f4f4f4] text-center text-[14px] mx-[2px]"
        style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
      >
        {member.name}
      </span>
      {member.role && (
        <span className="w-[120px] text-[10px] leading-[12px] text-[#7e7e7e] text-center">
          {member.role}
        </span>
      )}
    </div>
  );

  if (member.link) {
    return (
      <a href={member.link} target="_blank" rel="noopener noreferrer" className="no-underline">
        {card}
      </a>
    );
  }
  return card;
}

function ProfileCardExtra({ member }: { member: Member }) {
  const imgSrc = member.img
    ? `/images/SSRLProfiles/${member.img}`
    : "/images/SSRLProfiles/default.png";

  const nameEndsInS = member.name.endsWith("s") || member.name.endsWith("S");
  const cvText = nameEndsInS ? `${member.name}' CV` : `${member.name}'s CV`;

  return (
    <div className="flex flex-col justify-center items-center w-[180px] mb-5">
      <img
        src={imgSrc}
        alt={member.name}
        className="h-[120px] w-[120px] rounded-full object-cover object-top mb-[10px]"
      />
      <span
        className="text-[#f4f4f4] text-center text-[14px] mx-[2px]"
        style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
      >
        {member.name}
      </span>
      {member.role && (
        <span className="w-[120px] text-[10px] leading-[12px] text-[#7e7e7e] text-center">
          {member.role}
        </span>
      )}
      {member.link && (
        <a
          href={member.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-[#6dcbd8] mt-1"
        >
          {cvText}
        </a>
      )}
    </div>
  );
}

const tabs = [
  { label: "MEMESat-1", leaderKey: "memeSat", memberKey: "memeSatMembers" },
  { label: "MOCI", leaderKey: "moci", memberKey: "mociMembers" },
  { label: "COSMO", leaderKey: "cosmo", memberKey: "cosmoMembers" },
  { label: "Lab Operations", leaderKey: "labops", memberKey: "labopsMembers" },
  { label: "Research & Development", leaderKey: "rnd", memberKey: "rndMembers" },
  { label: "Data Team", leaderKey: "dataTeam", memberKey: "dataMembers" },
  { label: "LearnSat", leaderKey: "LEARNSatTeam", memberKey: "LEARNSatMembers" },
] as const;

export default function AboutPage() {
  const [team, setTeam] = useState<TeamData | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("/json/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data.team));
  }, []);

  const currentTab = tabs[activeTab];

  return (
    <>
      {/* Hero banner */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/SSRLProfiles/team-bigteamfam.png)" }}
      >
        <div className="flex justify-center items-center h-[475px] bg-black/75 px-10">
          <p className="text-[#f4f4f4] text-[16px] leading-[24px] max-w-[900px] text-left">
            In 2015, 3 students at the University of Georgia set out to build a
            spacecraft funded by Kickstarter. They reached out to faculty and
            received funding NASA and the Air Force.
            <br /><br />
            The Small Satellite Research Laboratory was founded in 2016 with 8
            faculty and 15 undergraduate students. The lab is now building two
            cubesats for Low Earth Orbit and contains over 50 undergraduate
            students, 5 graduate students, and 12 faculty. The Small Satellite
            Research Laboratory had its first satellite, SPOC, deployed from the
            International Space Station in 2020.
            <br /><br />
            <Link href="/missions" className="text-[16px]! leading-[24px]">Learn More</Link>
          </p>
        </div>
      </div>

      <br />

      {/* Overview: video + mission goals */}
      <div className="flex flex-wrap w-full px-[50px] py-[25px]">
        <div className="flex-1 flex justify-center min-w-[300px]">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-ZDZ8wQPj24"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="self-center"
          />
        </div>
        <div className="flex-1 text-[#f4f4f4] text-[16px] leading-[24px] min-w-[300px]">
          <span className="text-white text-[20px] font-bold ml-[5%]">
            We continue to fulfill UGA mission goals by:
          </span>
          <ol className="mt-[3%] leading-[24px] text-[16px] list-decimal pl-8">
            <li className="text-[#f4f4f4]">
              Bringing national and international recognition to UGA through its
              development of cutting edge technology
            </li>
            <li className="text-[#f4f4f4]">
              &quot;Serving a diverse and well prepared student body and promoting high
              levels of student achievement&quot; through the training of undergraduate
              students in STEM related fields from a diverse set of majors
            </li>
            <li className="text-[#f4f4f4]">
              &quot;Promoting instructional quality and effectiveness and enhancing
              intuitionally relevant faculty qualifications&quot; by teaching students
              the steps involved in designing, building, and testing space hardware
              as well as navigating the gauntlet that is procedure writing,
              budgeting, and management. These skills are not only applicable to
              the academic world but also the general workforce.
            </li>
          </ol>
        </div>
      </div>

      {/* Team container */}
      <div className="flex flex-col max-w-[90%] px-[15px] mx-auto">
        {/* PI and Lab Manager */}
        <div className="flex flex-wrap text-center">
          <div className="flex-1 min-w-[300px]">
            <h5 className="text-[#f4f4f4] text-[35px] m-[10px] pb-[5px]">Principal Investigator</h5>
            <div className="flex justify-center flex-wrap">
              {team?.principleinvestigators.map((m) => (
                <ProfileCardExtra key={m.name} member={m} />
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-[300px]">
            <h5 className="text-[#f4f4f4] text-[35px] m-[10px] pb-[5px]">Lab Manager</h5>
            <div className="flex justify-center flex-wrap">
              {team?.labmanagers.map((m) => (
                <ProfileCardExtra key={m.name} member={m} />
              ))}
            </div>
          </div>
        </div>

        {/* Undergraduate Students */}
        <h4 className="text-[#f4f4f4] text-[35px] m-[10px] pb-[5px]">Undergraduate Students</h4>

        {/* Tabbed carousel */}
        <div className="border-2 border-[goldenrod]">
          {/* Tab buttons */}
          <div className="flex">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className="flex-1 py-[14px] px-[16px] text-[17px] text-white border-2 border-[goldenrod] cursor-pointer transition-colors"
                style={{
                  backgroundColor: i === activeTab ? "goldenrod" : "gray",
                  fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-4">
            <h3 className="text-[#f4f4f4] text-[18px] m-[10px] pb-[5px]">Leadership</h3>
            <div className="flex justify-center flex-wrap">
              {team &&
                (team[currentTab.leaderKey] as Member[]).map((m) =>
                  currentTab.leaderKey === "dataTeam" || currentTab.leaderKey === "LEARNSatTeam" ? (
                    <ProfileCardExtra key={m.name} member={m} />
                  ) : (
                    <ProfileCard key={m.name} member={m} />
                  )
                )}
            </div>
            <h3 className="text-[#f4f4f4] text-[18px] m-[10px] pb-[5px]">Our Team</h3>
            <div className="flex justify-center flex-wrap">
              {team &&
                (team[currentTab.memberKey] as Member[]).map((m) => (
                  <ProfileCard key={m.name} member={m} />
                ))}
            </div>
          </div>
        </div>

        {/* Interns */}
        <h4 className="text-[#f4f4f4] text-[35px] m-[10px] pb-[5px]">Interns</h4>
        <div className="flex justify-center flex-wrap">
          {team?.interns.map((m) => (
            <ProfileCard key={m.name} member={m} />
          ))}
        </div>

        {/* Graduate Students */}
        <h4 className="text-[#f4f4f4] text-[35px] m-[10px] pb-[5px]">Graduate Students</h4>
        <div className="flex justify-center flex-wrap">
          {team?.graduatestudents.map((m) => (
            <ProfileCard key={m.name} member={m} />
          ))}
        </div>

        {/* Faculty Investigators */}
        <h4 className="text-[#f4f4f4] text-[35px] m-[10px] pb-[5px]">Faculty Investigators</h4>
        <div className="flex justify-center flex-wrap">
          {team?.associatedfaculty.map((m) => (
            <ProfileCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </>
  );
}
