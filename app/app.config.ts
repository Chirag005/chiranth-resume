/**
 * Single source of truth for identity and contact details.
 * Every component reads from here, so links can never drift apart.
 */
export default defineAppConfig({
  site: {
    name: 'Chiranth Nagendra',
    firstName: 'Chiranth',
    initials: 'CN',
    tagline:
      'CS undergrad building applied AI systems across vision, NLP, speech, and fraud detection — headed toward AI/ML research.',
    affiliation: 'Computer Science & Business Systems · JSS STU, Mysore',
    location: 'Mysore, Karnataka, India',
    email: 'chiranthnagendra@gmail.com',
    cv: '/cv.pdf',
    /** Path under /public, e.g. '/images/chiranth.jpg'. Null shows the monogram card. */
    photo: null as string | null,
    socials: [
      { label: 'GitHub', href: 'https://github.com/ChiranthN23', icon: 'icon-[simple-icons--github]' },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/chiranth005',
        icon: 'icon-[simple-icons--linkedin]',
      },
    ],
  },
})
