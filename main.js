// Create icons component references
const { Wind, Leaf, Sun, Trees, CircuitBoard, Github, Linkedin, Mail } = window.lucide;

// Navigation Component
const Navigation = () => {
  return React.createElement('nav', { className: 'fixed w-full bg-white/80 nav-blur shadow-sm z-50' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
      React.createElement('div', { className: 'flex justify-between items-center h-16' },
        React.createElement('span', { className: 'text-xl font-bold text-emerald-800' }, 'Portfolio'),
        React.createElement('div', { className: 'hidden md:flex space-x-8' },
          ['Home', 'About', 'Projects', 'Contact'].map(item =>
            React.createElement('a', {
              key: item,
              href: `#${item.toLowerCase()}`,
              className: 'text-gray-700 hover:text-emerald-600'
            }, item)
          )
        )
      )
    )
  );
};

// Home Section
const Home = () => {
  return React.createElement('section', {
    id: 'home',
    className: 'min-h-screen pt-16 flex items-center hero-gradient'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-20' },
      React.createElement('div', { className: 'text-center animate-fadeIn' }, [
        React.createElement('img', {
          src: 'https://images.unsplash.com/photo-1534529679512-dd10d316715f?w=400&h=400&q=80&crop=faces&fit=crop',
          alt: 'Profile',
          className: 'w-32 h-32 rounded-full mx-auto mb-8 shadow-lg border-4 border-white'
        }),
        React.createElement('h1', { className: 'text-4xl font-bold text-gray-900 mb-4' }, [
          React.createElement('span', { className: 'block' }, 'Your Name'),
          React.createElement('span', { className: 'text-emerald-700' }, 'Renewable Energy Professional')
        ]),
        React.createElement('p', { className: 'text-xl text-gray-600 mb-8' },
          'Driving sustainable transformation through innovative renewable energy solutions'
        ),
        React.createElement('div', { className: 'flex justify-center gap-8 mb-12' }, [
          createFeatureIcon(Wind, 'Wind Energy'),
          createFeatureIcon(Sun, 'Solar Power'),
          createFeatureIcon(Leaf, 'Sustainability')
        ]),
        React.createElement('div', { className: 'flex justify-center gap-4 mb-12' }, [
          React.createElement('a', {
            href: '#contact',
            className: 'bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700'
          }, 'Contact Me'),
          React.createElement('a', {
            href: '#projects',
            className: 'bg-white text-emerald-600 px-6 py-3 rounded-lg border border-emerald-600 hover:bg-emerald-50'
          }, 'View Projects')
        ]),
        React.createElement('div', { className: 'flex justify-center space-x-6' }, [
          createSocialLink(Github, 'https://github.com/yourusername'),
          createSocialLink(Linkedin, 'https://linkedin.com/in/yourusername'),
          createSocialLink(Mail, 'mailto:your.email@example.com')
        ])
      ])
    )
  );
};

// Helper function for feature icons
const createFeatureIcon = (Icon, text) => {
  return React.createElement('div', { className: 'flex flex-col items-center text-emerald-600' }, [
    React.createElement(Icon, { className: 'w-8 h-8 mb-2' }),
    React.createElement('span', { className: 'text-sm font-medium' }, text)
  ]);
};

// Helper function for social links
const createSocialLink = (Icon, href) => {
  return React.createElement('a', {
    href: href,
    className: 'text-gray-600 hover:text-emerald-600',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, React.createElement(Icon, { className: 'w-6 h-6' }));
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'Offshore Wind Development',
      description: 'Leading the development of a 500MW offshore wind farm project, focusing on environmental impact minimization and optimal energy production.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Solar Integration Platform',
      description: 'Developed an innovative platform for integrating solar power into existing grid infrastructure, improving efficiency by 25%.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sustainable Grid Storage',
      description: 'Implementing advanced energy storage solutions to enhance grid stability and maximize renewable energy utilization.',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return React.createElement('section', {
    id: 'projects',
    className: 'py-20 bg-gray-50'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4' }, [
      React.createElement('h2', { className: 'text-3xl font-bold text-center text-gray-900 mb-12' },
        'Featured Projects'
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        projects.map((project, index) =>
          React.createElement('div', {
            key: index,
            className: 'project-card bg-white rounded-lg shadow-lg overflow-hidden'
          }, [
            React.createElement('img', {
              src: project.image,
              alt: project.title,
              className: 'w-full h-48 object-cover'
            }),
            React.createElement('div', { className: 'p-6' }, [
              React.createElement('h3', { className: 'text-xl font-bold mb-2 text-emerald-800' },
                project.title
              ),
              React.createElement('p', { className: 'text-gray-600' },
                project.description
              )
            ])
          ])
        )
      )
    ])
  );
};

// About Section
const About = () => {
  const skills = [
    {
      icon: Wind,
      title: 'Wind Energy',
      description: 'Expertise in wind farm development and optimization'
    },
    {
      icon: CircuitBoard,
      title: 'Smart Grid Integration',
      description: 'Advanced energy system integration and management'
    },
    {
      icon: Trees,
      title: 'Sustainability',
      description: 'Environmental impact assessment and optimization'
    }
  ];

  return React.createElement('section', {
    id: 'about',
    className: 'py-20 bg-white'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4' }, [
      React.createElement('h2', { className: 'text-3xl font-bold text-center text-gray-900 mb-8' },
        'About Me'
      ),
      React.createElement('p', { className: 'text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12' },
        'Dedicated to accelerating the transition to renewable energy through innovative solutions ' +
        'and sustainable project development.'
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        skills.map((skill, index) =>
          React.createElement('div', {
            key: index,
            className: 'bg-emerald-50 p-6 rounded-lg'
          }, [
            React.createElement(skill.icon, { className: 'w-8 h-8 text-emerald-600 mb-4' }),
            React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, skill.title),
            React.createElement('p', { className: 'text-gray-600' }, skill.description)
          ])
        )
      )
    ])
  );
};

// Contact Section
const Contact = () => {
  return React.createElement('section', {
    id: 'contact',
    className: 'py-20 bg-white'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 text-center' }, [
      React.createElement('h2', { className: 'text-3xl font-bold text-gray-900 mb-8' },
        'Get In Touch'
      ),
      React.createElement('p', { className: 'text-xl text-gray-600 mb-8' },
        'Interested in discussing renewable energy solutions or sustainability initiatives? Let\'s connect!'
      ),
      React.createElement('p', { className: 'text-lg text-gray-600' }, [
        'Email me at ',
        React.createElement('a', {
          href: 'mailto:your.email@example.com',
          className: 'text-emerald-600 hover:text-emerald-700'
        }, 'your.email@example.com')
      ])
    ])
  );
};

// Main App Component
const App = () => {
  return React.createElement('div', { className: 'min-h-screen hero-gradient' }, [
    React.createElement(Navigation),
    React.
