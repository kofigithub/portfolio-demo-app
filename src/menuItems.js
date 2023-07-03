export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About Me',
    url: 'about-me',
	submenu: [
	  {
        title: 'About Me',
        url: 'about-me',
      },
      {
        title: 'Mission',
        url: 'mission',
      },
      {
        title: 'Vision',
        url: 'vision',
      },
    ],
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'Software Development Services',
        url: 'software-development-service',
      },
	  {
        title: 'Banking Apllication Development',
        url: 'banking-application-development',
      },
	  {
        title: 'Document Scan Digitisation Services',
        url: 'document-digitisation-service',
      },
	  {
        title: 'Other Service Activity',
        url: 'other-service-activity',
      },
	  ],
  },
	  { 
    title:'Projects',
    url: 'projects',
  
    submenu: [
      {
        title: 'Projects',
        url: 'projects',
      },
      {
        title: 'Certifications',
        url: 'certifications',
      },
    ],
  },
  {  
        title: 'Videos',
        url: 'video',
	submenu: [
      {
        title: 'Video',
        url: 'video',
	  },
	  {
        title: 'Video2',
        url: 'Video2',
      },
	  ],
  },
  {
        title: 'Contact',
        url: 'contact',
   },
];
