// Sample payment data - replace with actual API data
export const paymentData = [
  {
    id: 'INV-742183',
    dateIssued: '04-15-2025',
    course: 'Advanced React Development',
    billingPeriod: 'Apr 2025',
    amount: '$1,200.00',
    status: 'paid'
  },
  {
    id: 'INV-742184',
    dateIssued: '03-10-2025',
    course: 'JavaScript Fundamentals',
    billingPeriod: 'Mar 2025',
    amount: '$950.00',
    status: 'paid'
  },
  {
    id: 'INV-742185',
    dateIssued: '02-05-2025',
    course: 'Node.js Backend Development',
    billingPeriod: 'Feb 2025',
    amount: '$780.00',
    status: 'paid'
  },
  {
    id: 'INV-742186',
    dateIssued: '01-12-2025',
    course: 'Full Stack Web Development',
    billingPeriod: 'Jan 2025',
    amount: '$1,050.00',
    status: 'paid'
  },
  {
    id: 'INV-742187',
    dateIssued: '12-09-2024',
    course: 'Python Programming',
    billingPeriod: 'Dec 2024',
    amount: '$1,400.00',
    status: 'paid'
  },
  {
    id: 'INV-742188',
    dateIssued: '11-15-2024',
    course: 'Data Science with Python',
    billingPeriod: 'Nov 2024',
    amount: '$1,350.00',
    status: 'paid'
  },
  {
    id: 'INV-742189',
    dateIssued: '10-20-2024',
    course: 'Machine Learning Basics',
    billingPeriod: 'Oct 2024',
    amount: '$1,600.00',
    status: 'paid'
  },
  {
    id: 'INV-742190',
    dateIssued: '09-25-2024',
    course: 'Cloud Computing AWS',
    billingPeriod: 'Sep 2024',
    amount: '$1,800.00',
    status: 'paid'
  },
  {
    id: 'INV-742191',
    dateIssued: '08-30-2024',
    course: 'DevOps Fundamentals',
    billingPeriod: 'Aug 2024',
    amount: '$1,100.00',
    status: 'paid'
  },
  {
    id: 'INV-742192',
    dateIssued: '07-15-2024',
    course: 'Cybersecurity Essentials',
    billingPeriod: 'Jul 2024',
    amount: '$1,250.00',
    status: 'paid'
  }
];

export const tableHeaderConfig = [
  {
    key: 'checkbox',
    title: '',
    style: { width: '50px', textAlign: 'center' }
  },
  {
    key: 'id',
    title: 'Invoice Number',
    style: { width: '150px' }
  },
  {
    key: 'dateIssued',
    title: 'Date Issued',
    style: { width: '120px' }
  },
  {
    key: 'course',
    title: 'Course',
    style: { width: '200px' }
  },
  {
    key: 'billingPeriod',
    title: 'Billing Period',
    style: { width: '150px' }
  },
  {
    key: 'amount',
    title: 'Amount',
    style: { width: '120px', textAlign: 'right' }
  },
  {
    key: 'status',
    title: 'Status',
    style: { width: '100px', textAlign: 'center' }
  },
  {
    key: 'download',
    title: 'Download',
    style: { width: '100px', textAlign: 'center' }
  }
];
