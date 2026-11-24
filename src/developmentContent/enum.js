import {
  LuActivity,
  LuBookOpen,
  LuCalendarCheck,
  LuClipboardCheck,
  LuCreditCard,
  LuFlower2,
  LuLayoutDashboard,
  LuLifeBuoy,
  LuMessagesSquare,
  LuNotebookPen,
  LuSettings,
  LuUsers,
} from "react-icons/lu";

export const sidebarData = [
  { _id: 1, name: "Dashboard", icon: LuLayoutDashboard, link: "/user/dashboard" },
  { _id: 2, name: "Coaching Sessions", icon: LuMessagesSquare, link: "/user/coaching-sessions" },
  { _id: 3, name: "Journal", icon: LuNotebookPen, link: "/user/journal" },
  { _id: 4, name: "Meditations", icon: LuFlower2, link: "/user/meditations" },
  { _id: 5, name: "Courses", icon: LuBookOpen, link: "/user/courses" },
  { _id: 6, name: "Payment History", icon: LuCreditCard, link: "/user/payment-history" },
];

export const adminSidebarData = [
  { _id: 1, name: "Dashboard", icon: LuLayoutDashboard, link: "/dashboard" },
  { _id: 2, name: "Users", icon: LuUsers, link: "/users" },
  { _id: 3, name: "Activity & Progress", icon: LuActivity, link: "/activity-and-progress" },
  { _id: 4, name: "Meditations", icon: LuFlower2, link: "/meditations" },
  { _id: 5, name: "Courses", icon: LuBookOpen, link: "/courses" },
  { _id: 6, name: "Assessments", icon: LuClipboardCheck, link: "/assessments" },
  { _id: 7, name: "Bookings", icon: LuCalendarCheck, link: "/bookings" },
];

export const utilitySidebarData = [
  { _id: 8, name: "Support / Help", icon: LuLifeBuoy, link: "/support" },
  { _id: 9, name: "Settings", icon: LuSettings, link: "/settings" },
];

// Short page descriptions shown under the header title
export const pageSubtitles = {
  dashboard: "Here's what's happening across your platform today.",
  users: "Manage members, roles and account status.",
  "activity-and-progress": "Track engagement and cohort progress over time.",
  meditations: "Curate and organise guided meditations.",
  courses: "Create, edit and publish learning content.",
  assessments: "Review assessments and submissions.",
  assignments: "Review and grade assignments.",
  bookings: "Upcoming and past coaching bookings.",
  booking: "Book a new coaching session.",
  "coaching-sessions": "Your upcoming and past sessions with your coach.",
  journal: "Capture your thoughts and reflect on your growth.",
  "payment-history": "Invoices, receipts and payment status.",
};
