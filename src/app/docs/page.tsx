import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdministratorDocs() {
  const contents = [
    {
      title: "Service Document",
      content: (
        <>
          <div>
            Our service will give the capacity to workers and clients to ask for
            any support of a problem presented in the system with the usage of
            tickets. After they generate the ticket the IT team will be notified
            and in the flow of the service each ticket that is generated will be
            assigned to someone from the team.
          </div>
          <div>
            Also It will have different types of tickets depending on its
            priority, it will have four types: Critical, High, Medium and Low.
          </div>
        </>
      ),
      subContents: [
        {
          title: "Objectives",
          content: (
            <ul className="flex flex-col gap-y-2 list-disc pl-5">
              <li>
                Give a more organized way to ask for internal and external
                support to the IT team.
              </li>
              <li>
                Solve any problem that has to be done at the moment and impacts
                in a critical form the system or the business.
              </li>
              <li>Have each support given by the IT members documented.</li>
              <li>
                Ensure that a problem has been solved and that the
                internal/external client has been satisfied with the result.
              </li>
            </ul>
          ),
        },
        {
          title: "Roles",
          content: (
            <ul className="flex flex-col gap-y-2 list-disc pl-5">
              <li>
                <span className="font-bold">Internal client - </span>
                Collaborators of the company that make use of a system made up
                by the IT team.
              </li>
              <li>
                <span className="font-bold">External client - </span>
                Customers that have acquired a system that has been sold by the
                company.
              </li>
              <li>
                <span className="font-bold">IT Team - </span>
                Involves different fields of the technology team, this
                collaborators are related to a specific system and can involved
                the infrastructure, development and administrative staff. This
                will have sub-roles:
                <ul className="mt-2 flex flex-col gap-y-2 list-disc pl-5">
                  <li>
                    <span className="font-bold">Administrator - </span>
                    It will have whole access and full control over the system.
                    He can manage users, configure settings and access to data.
                  </li>
                  <li>
                    <span className="font-bold">Manager - </span>
                    It can see the tickets flow day by day, monitor data and
                    assigned tickets in a manual form.
                  </li>
                  <li>
                    <span className="font-bold">Operational member - </span>
                    Collaborator that has the ticket assigned and has to
                    resolved the ticket that has been assigned to him.
                  </li>
                </ul>
              </li>
            </ul>
          ),
        },
        {
          title: "Processes and Procedures",
          content: (
            <div className="flex flex-col gap-y-2">
              The core of the system consist on and input that will be the
              ticket and an output that will be the solution of it. But all the
              things that occurs to reached the output consists on the following
              processes:
              <ul className="flex flex-col gap-y-2 list-disc pl-5">
                <li>
                  <div className="font-bold">P1 Ticket Generation</div>
                  <div className="mt-2">
                    As written before, the process starts with the input of a
                    ticket, where the internal / external client creates it when
                    having a problem with the system.
                  </div>
                  <div className="my-2">
                    It will go to the website of tickets, and it will select the
                    area in which he is having problem with (each area will have
                    a description in a ubiquitous form to make anyone understand
                    with which field his problem is related with it) adding a
                    description about it and putting a tag of the possible
                    category of the ticket.
                  </div>
                </li>
                <li>
                  <div className="font-bold">P2 Ticket Assignation</div>
                  <div className="mt-2">
                    Once a ticket has been created, it will reach the assignment
                    stage in which a manager can assign to a collaborator the
                    ticket that has been registered or a collaborator can select
                    the ticket he wants to attend, it depends on the criteria
                    selection and the business strategy.
                  </div>
                  <div className="my-2">
                    Each person has to focus more depending on the priority of
                    the tickets if his ticket workloads it needs to work on the
                    ones that have a highest priority and before taking it, he
                    needs to analyze if the tickets priority needs to be
                    categorized to an upper or lower priority.
                  </div>
                </li>
                <li>
                  <div className="font-bold">P3 Ticket Action</div>
                  <div className="mt-2">
                    The collaborator needs to keep track of the communication of
                    the customer, entering the resolution process of the ticket.
                    At the moment the collaborator begins to solve a ticket he
                    needs to set the status of it on: In progress, so people can
                    know where a ticket has been processed or if someone else
                    can take a ticket that the other collaborator has assigned
                    to resolve more tickets.
                  </div>
                  <div className="my-2">
                    If it is needed to escalate the ticket to higher roles to
                    reach a solution the collaborator needs to add the other
                    collaborator to the ticket to have the data that has been
                    tested to find a solution and try other solutions instead of
                    trying again the things that have already been tried.
                  </div>
                </li>
                <li>
                  <div className="font-bold">P4 - Ticket closing</div>
                  <div className="my-2">
                    Once the collaborator has resolved the issue, he has to set
                    the ticket to resolved, and needs to contact the customer
                    that creates the ticket to have the respective feedback, if
                    he tells that everything is working well the collaborator
                    needs to set the ticket as closed, otherwise the status has
                    to be resigned to in progress, and the collaborator needs to
                    attend the feedback suggestions about what part of the
                    problem is remaining to help to solve it completely.
                  </div>
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "Tools Involved Into the Service",
          content: (
            <div className="flex flex-col gap-y-2">
              For the incorporation of the service it will have some tools
              running in the background, in which it has been incorporated with
              the OS of Windows Server with system center. The selected tools of
              system center to build up the logic and flow of the system has
              been build up with the following:
              <ul className="flex flex-col gap-y-2 list-disc pl-5">
                <li>
                  <div className="font-bold">
                    System Center Operations Manager (SCOM)
                  </div>
                  <div className="mt-2">
                    Acts as the central nervous system, continuously monitoring
                    IT infrastructure for performance issues and potential
                    problems. When anomalies are detected, SCOM generates
                    alerts.
                  </div>
                  <div className="my-2">
                    SCOM alerts automatically create tickets in SCSM, reducing
                    manual workload and ensuring timely issue identification.
                  </div>
                </li>
                <li>
                  <div className="font-bold">
                    System Center Orchestrator (SCORCH)
                  </div>
                  <div className="mt-2">
                    Functions as the automation engine. It receives alerts from
                    SCOM and triggers pre-defined workflows (runbooks) to
                    automate routine tasks. These runbooks can diagnose basic
                    issues, attempt initial fixes, and even notify relevant
                    personnel via email or SMS.
                  </div>
                  <div className="my-2">
                    SCORCH automates repetitive tasks, freeing up the
                    collaborator time to focus on complex issues.
                  </div>
                </li>
                <li>
                  <div className="font-bold">
                    System Center Service Manager (SCSM)
                  </div>
                  <div className="my-2">
                    Serves as the central hub for ticketing and incident
                    management. Users can submit tickets through various
                    channels, like a web portal or email. SCSM integrates with
                    SCOM, allowing ticket creation from triggered alerts.
                    Additionally, agents can leverage SCSM to track ticket
                    progress, manage workflows, and collaborate with team
                    members.
                  </div>
                </li>
              </ul>
              <div>
                Overall the usage of this Microsoft system center tools for the
                ticket system delivers and automatized and efficient management
                solution for the problems presented by the customers, leading to
                improve the service delivery and user experience.
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Service Level Agreement",
      content: (
        <div>
          The following section outlines terms between Microsoft Desk and their
          direct consumers.
        </div>
      ),
      subContents: [
        {
          title: "Introduction",
          content: (
            <div>
              This Service Level Agreement (SLA) outlines the agreed terms and
              conditions between Microsoft Desk and their direct consumers for
              the provision of custom software support services. The objective
              of this SLA is to ensure a mutual understanding of service
              expectations, responsibilities, and performance metrics.
            </div>
          ),
        },
        {
          title: "Service Scope",
          content: (
            <div className="flex flex-col gap-y-2">
              The custom software support services covered under this SLA
              include but are not limited to:
              <ul className="flex flex-col gap-y-2 list-disc pl-5">
                <li>Technical assistance for software</li>
                <li>Bug fixes and troubleshooting.</li>
                <li>Installation, configuration, and updates.</li>
                <li>Performance optimization and enhancements.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Service Availability",
          content: (
            <div>
              Service Availability The custom software support services will be
              available 24/7/365. Scheduled maintenance windows will be
              communicated in advance, and efforts will be made to minimize
              service disruptions.
            </div>
          ),
        },
        {
          title: "Response and Resolution Times",
          content: (
            <ul className="flex flex-col gap-y-2 list-disc pl-5">
              <li>
                <span className="text-red-600">Critical</span> - Immediate
                response within 30 minutes. Incident resolution within 4 hours.
              </li>
              <li>
                <span className="text-orange-600">High</span> - Response within
                1 hour. Incident resolution within 8 hours.
              </li>
              <li>
                <span className="text-yellow-600">Medium</span> - Response
                within 4 hours. Incident resolution within 24 hours.
              </li>
              <li>
                <span className="text-green-600">Low</span> - Response within 24
                hours. Incident resolution within 48 hours.
              </li>
            </ul>
          ),
        },
        {
          title: "Escalation Procedure",
          content: (
            <div className="flex flex-col gap-y-2">
              Escalation Procedure In the event of unresolved issues or
              dissatisfaction with the support provided, escalation procedures
              will be initiated as follows:
              <ul className="flex flex-col gap-y-2 list-disc pl-5">
                <li>
                  <span className="text-yellow-600">Level 1</span> - If the
                  issue remains unresolved at Levels 1 and 2 or if it escalates
                  to a critical or high-priority incident, it is escalated to
                  the Level 3 contact. The Level 3 contact will intervene
                  personally or designate appropriate senior personnel to
                  address the issue urgently. They will coordinate with all
                  relevant stakeholders, including technical teams, management,
                  and the client, to expedite the resolution process and
                  mitigate any potential impact on service delivery.
                  Additionally, the Level 3 contact will ensure that
                  comprehensive post-incident analysis and corrective actions
                  are undertaken to prevent recurrence and improve service
                  quality.
                </li>
                <li>
                  <span className="text-orange-600">Level 2</span> - If the
                  issue persists despite Level 1 intervention or if it requires
                  specialized expertise or further escalation, it is escalated
                  to the Level 2 contact. The Level 2 contact will conduct a
                  thorough review of the situation, coordinate with relevant
                  teams or departments, and prioritize the resolution of the
                  issue. They will provide regular updates to the client and
                  ensure that all necessary resources are allocated to resolve
                  the issue expediently.
                </li>
                <li>
                  <span className="text-red-600">Level 3</span> - If the issue
                  remains unresolved at Levels 1 and 2 or if it escalates to a
                  critical or high-priority incident, it is escalated to the
                  Level 3 contact. The Level 3 contact will intervene personally
                  or designate appropriate senior personnel to address the issue
                  urgently. They will coordinate with all relevant stakeholders,
                  including technical teams, management, and the client, to
                  expedite the resolution process and mitigate any potential
                  impact on service delivery. Additionally, the Level 3 contact
                  will ensure that comprehensive post-incident analysis and
                  corrective actions are undertaken to prevent recurrence and
                  improve service quality.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "Reporting and Communication",
          content: (
            <div>
              Regular service performance reports will be provided on a weekly
              basis. Communication channels for support requests include email
              and ticketing system within the web portal. Status updates will be
              provided at regular intervals or upon request.
            </div>
          ),
        },
        {
          title: "Service Level Review",
          content: (
            <div>
              Service levels and performance metrics will be reviewed
              periodically, with adjustments made as necessary to meet changing
              requirements. reviewed on a monthly basis.
            </div>
          ),
        },
        {
          title: "Customer Responsibilities",
          content: (
            <ul className="flex flex-col gap-y-2 list-disc pl-5">
              <li>
                Provide accurate and detailed information regarding the issue or
                support request.
              </li>
              <li>
                Grant necessary access permissions and privileges to service
                provider personnel for troubleshooting and resolution.
              </li>
              <li>
                Cooperate with service provider personnel during the
                troubleshooting and resolution process.
              </li>
              <li>
                Adhere to any service provider guidelines or recommendations for
                software usage, maintenance, and updates.
              </li>
              <li>
                Report any issues promptly and provide timely feedback on the
                effectiveness of solutions provided.
              </li>
            </ul>
          ),
        },
        {
          title: "Service Provider Responsibilities",
          content: (
            <ul className="flex flex-col gap-y-2 list-disc pl-5">
              <li>
                Provide timely and effective support in accordance with the
                agreed-upon SLA terms and priority levels.
              </li>
              <li>
                Allocate appropriate resources and expertise to address support
                requests promptly and efficiently.
              </li>
              <li>
                Communicate proactively with the client regarding the status of
                support requests, including updates on progress and resolution
                timelines.
              </li>
              <li>
                Maintain technical proficiency and stay abreast of advancements
                in relevant technologies to ensure high-quality support
                services.
              </li>
              <li>
                Adhere to best practices and industry standards in software
                support and incident management.
              </li>
              <li>
                Conduct regular service reviews and performance evaluations to
                identify areas for improvement and optimize service delivery.
              </li>
            </ul>
          ),
        },
        {
          title: "Service Exclusions",
          content: (
            <ul className="flex flex-col gap-y-2 list-disc pl-5">
              <li>
                Issues arising from unauthorized modifications or alterations to
                the software by the client or third parties.
              </li>
              <li>
                Support for hardware or infrastructure issues not directly
                related to the custom software.
              </li>
              <li>
                Training or support for functionalities not included in the
                original scope of the custom software.
              </li>
              <li>
                Support for outdated or unsupported software versions beyond a
                reasonable transition period.
              </li>
              <li>
                Issues caused by factors beyond the service providers control,
                such as natural disasters, cyberattacks, or force majeure
                events.
              </li>
              <li>
                Support for third-party software integrations or dependencies
                unless explicitly included in the service agreement.
              </li>
              <li>
                Any services or activities not explicitly mentioned in the SLA
                or service agreement unless agreed upon separately in writing.
              </li>
            </ul>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <ToC contents={contents} />
      <Content contents={contents} />
    </>
  );
}

function Content({
  contents,
}: {
  contents: {
    title: string;
    content: React.ReactNode;
    subContents?: { title: string; content: React.ReactNode }[];
  }[];
}) {
  return (
    <div className="flex flex-col sticky top-0 overflow-y-auto scroll-pt-1 custom-scrollbar pr-5">
      {contents.map((item) => (
        <div
          id={item.title}
          className="flex flex-col gap-y-5 py-10 first:border-y border-b"
          key={item.title}
        >
          <div className="text-xl font-bold">{item.title}</div>
          {item.content}
          {item.subContents &&
            item.subContents.map((item) => (
              <SubContent key={item.title} content={item} />
            ))}
        </div>
      ))}
    </div>
  );
}

function SubContent({
  content,
}: {
  content: { title: string; content: React.ReactNode };
}) {
  return (
    <div id={content.title} className="flex flex-col gap-y-5">
      <div className="font-bold">{content.title}</div>
      {content.content}
    </div>
  );
}

function ToC({
  contents,
}: {
  contents: {
    title: string;
    content: React.ReactNode;
    subContents?: { title: string; content: React.ReactNode }[];
  }[];
}) {
  return (
    <div className="flex pb-10 flex-col text-sm gap-y-2 shrink-0 sticky top-0 overflow-y-auto pr-5 custom-scrollbar">
      <div className="font-bold">Table of Contents</div>
      {contents.map((item) => (
        <div key={item.title}>
          <Button
            variant="link"
            className="hover:text-foreground text-muted-foreground p-0 self-start"
            asChild
          >
            <Link href={`#${item.title}`}>{item.title}</Link>
          </Button>
          {item.subContents &&
            item.subContents.map((item) => (
              <div key={item.title} className="border-l pl-4">
                <Button
                  variant="link"
                  className="hover:text-foreground text-muted-foreground p-0 self-start"
                  asChild
                >
                  <Link href={`#${item.title}`}>{item.title}</Link>
                </Button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
