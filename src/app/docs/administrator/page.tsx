import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

export default function UserDocs() {
  const contents = [
    {
      title: "Ticket System",
      content: (
        <div>
          This document provides a comprehensive guide to the ticket system
          within the application, covering both customer functionalities.
        </div>
      ),
    },
    {
      title: "Account Creation",
      content: (
        <div>
          You can create an account by clicking on the Sign Up button on the
          login page. Fill out the registration form with your email address,
          desired username, and a secure password.
        </div>
      ),
    },
    {
      title: "Submitting a Ticket",
      content: (
        <div>
          You can submit a ticket on the administration home page. Click the
          Submit a Ticket button and fill out the form with the required
          information.
        </div>
      ),
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

export function Content({
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

export function SubContent({
  content,
}: {
  content: { title: string; content: React.ReactNode };
}) {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="font-bold">{content.title}</div>
      {content.content}
    </div>
  );
}

export function ToC({
  contents,
}: {
  contents: { title: string; content: React.ReactNode }[];
}) {
  return (
    <div className="flex flex-col text-sm gap-y-2 shrink-0 sticky top-0 overflow-y-auto pr-5">
      <div className="font-bold">Table of Contents</div>
      {contents.map((item) => (
        <Button
          variant="link"
          className="text-muted-foreground p-0 self-start"
          key={item.title}
          asChild
        >
          <Link href={`#${item.title}`}>{item.title}</Link>
        </Button>
      ))}
    </div>
  );
}
