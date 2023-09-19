import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    "Work experience",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        what i've worked on
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        
        <div>
          <h3 id="twitch">Twitch</h3>
          <h4>Engineering Intern - Fulton team</h4>
          <h5>May - Aug 2023</h5>
        </div>
        <ul>
          <li>Developed template for internal customers to easily deploy a service used to sanity check their existing service at specified regular intervals and alarm customers if service is failing</li>
          <li>Service maintains 99.9% availability and a scheduling precision of 60 seconds within the expected interval which enables customers to be alerted of failure earlier in the cycle</li>
          <li><b>AWS CDK</b>, <b>Golang</b>, <b>Typescript</b></li>
        </ul>
        <div>
          <h3 id="lyft">Lyft</h3>
          <h4>Software Engineering Intern - Pink team</h4>
          <h5>Sep - Nov 2022</h5>
        </div>
        <ul>
          <li>Designed and implemented new self-serve mechanism for transitions between Lyft Pink membership plans</li>
          <li>Collaborated cross-functionally to identify unaccounted edge-cases, update support pages, and relay dev/ roll-out progress to stakeholders</li>
          <li><b>Python</b>, <b>gRPC</b>, <a href={"https://eng.lyft.com/the-journey-to-server-driven-ui-at-lyft-bikes-and-scooters-c19264a0378e"}><b>Server-Driven UI</b></a></li>
        </ul>
        <div>
          <h3 id="twitch">Twitch</h3>
          <h4>Engineering Intern - Fulton team</h4>
          <h5>June - Aug 2022</h5>
        </div>
        <ul>
          <li>Developed internal CLI tool for finding third party in internal code base</li>
          <li>Implemented result ranking algorithm for recommended package when multiple repositories exist for a third party package</li>
          <li><b>Golang</b></li>
        </ul>
        <div>
          <h3 id="google">Google</h3>
          <h4>Software (Site Reliability) Engineering Intern - F1 team</h4>
          <h5>May - Aug 2021</h5>
        </div>
        <ul>
          <li>Developed internal CLI tool for assessing safety of permission changes in production</li>
          <li>Collaborated with team of another internal tool to help migrate tool to a new version of internal API</li>
          <li><b>Python</b>, <b>Golang</b></li>
        </ul>
        <div>
          <h3 id="google">Google</h3>
          <h4><a href={"https://buildyourfuture.withgoogle.com/programs/step"}><b>STEP</b></a> Intern - YouTube Gaming team</h4>
          <h5>May - Aug 2020</h5>
        </div>
        <ul>
          <li>Worked within a 3 intern pod to develop a platform that allows users to watch Youtube videos together in rooms</li>
          <li>Implemented YouTube video player with synchronization between multiple clients</li>
          <li><b>Java</b>, <b>Google Cloud</b>, <b>jQuery</b></li>
        </ul>
        <div>
          <h3 id="google">Google</h3>
          <h4><a href={"https://blog.google/inside-google/life-at-google/googles-computer-science-summer/"}><b>Computer Science Summer Institute</b></a></h4>
          <h5>Jul 2019</h5>
        </div>
        <ul>
          <li>Three week introduction to Computer Science program</li>
          <li>Worked alongside two other participants to create our first web app and presented to Googlers at end of program</li>
          <li><b>Javascript</b>, <b>HTML</b>, <b>Google Cloud</b></li>
        </ul>
      </div>
    </section>
  );
}
