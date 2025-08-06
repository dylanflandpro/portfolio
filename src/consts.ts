// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import dayjs from './dayjs';
import type { Experience } from './types';
import BPCE from './assets/exp_logos/bpce.jpeg';
import BS from './assets/exp_logos/bearstudio_logo.png';
import Bartopia from './assets/exp_logos/bartopia_logo.png';
export const SITE_TITLE = "Dy'lab";
export const SITE_DESCRIPTION = 'Welcome to my portfolio / lab journey !';

export const experiences: Experience[] = [
  {
    image: BPCE,
    company: "Caisse d'Epargne",
    role: 'WordPress to SharePoint migration',
    startDate: dayjs('04/2025', 'MM/YYYY').toDate(),
    endDate: dayjs('06/2025', 'MM/YYYY').toDate(),
    description:
      'Led the full migration of an internal documentation system from WordPress to SharePoint. Enhanced accessibility, scalability, and role-based access within Microsoft 365. Created documentation and trained internal teams to ensure smooth adoption.',
    priority: 1,
  },
  {
    image: BS,
    company: 'BearStudio',
    role: 'Developer',
    startDate: dayjs('07/2025', 'MM/YYYY').toDate(),
    endDate: 'Now' as const,
    description:
      'Continuing to work on IT consulting missions focused on rescuing legacy applications and supporting end-to-end project development using modern web technologies.',
    priority: 4,
  },
  {
    image: BS,
    company: 'BearStudio',
    role: 'Developer',
    startDate: dayjs('11/2021', 'MM/YYYY').toDate(),
    endDate: dayjs('09/2024', 'MM/YYYY').toDate(),
    description:
      'Worked on modernizing legacy applications and delivering full-stack features. Projects included mobility apps, real estate platforms, recipe apps, political campaign sites, and UX/UI enhancements using modern stacks (React, Next.js, Node.js, etc.).',
    priority: 2,
  },
  {
    image: Bartopia,
    company: 'Bartopia',
    role: 'CEO and more',
    startDate: dayjs('10/2023', 'MM/YYYY').toDate(),
    endDate: dayjs('01/2025', 'MM/YYYY').toDate(),
    description:
      'Developed a loyalty app for bars/restaurants including market research, UI/UX design, mobile-first development, back-end logic, API integration (SumUp, Stripe), SEO, and legal compliance for subscriptions and contracts.',
    priority: 3,
  },
  {
    company: 'ECAR',
    role: 'Web development',
    startDate: dayjs('01/2025', 'MM/YYYY').toDate(),
    endDate: dayjs('01/2025', 'MM/YYYY').toDate(),
    description:
      'Refreshed a showcase website by redesigning the UI, integrating mockups, and handling deployment.',
    priority: 5,
  },
  {
    company: 'ABDH',
    role: 'IT Support',
    startDate: dayjs('12/2024', 'MM/YYYY').toDate(),
    endDate: dayjs('01/2025', 'MM/YYYY').toDate(),
    description:
      'Erased and rewrote hard drives with sensitive data, and extended Wi-Fi network coverage through access point setup.',
    priority: 6,
  },
  {
    company: 'ABDH',
    role: 'IT Developer',
    startDate: dayjs('04/2023', 'MM/YYYY').toDate(),
    endDate: dayjs('05/2023', 'MM/YYYY').toDate(),
    description:
      'Developed a car rental app with full CRUD functionality, handling multiple insurance options and front/back integration.',
    priority: 7,
  },
  {
    company: 'Carsat Normandy',
    role: 'IT Technician',
    startDate: dayjs('01/2021', 'MM/YYYY').toDate(),
    endDate: dayjs('02/2021', 'MM/YYYY').toDate(),
    description:
      'Provided IT support including OS installation, workspace setup, troubleshooting, and virtualization for internal users.',
    priority: 8,
  },
  {
    company: 'Les Explorateurs',
    role: 'Network and Systems Administrator',
    startDate: dayjs('06/2019', 'MM/YYYY').toDate(),
    endDate: dayjs('07/2019', 'MM/YYYY').toDate(),
    description:
      'Automated client and game PC management in a VR bar. Used scripting and systems tools (Wake On LAN, Springboard) for maintenance and optimization.',
    priority: 9,
  },
].sort((a, b) => a.priority - b.priority);
