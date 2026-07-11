// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed work and preprints across power systems, optimization, and artificial intelligence.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Postgraduate supervision, lab stewardship, and hands-on teaching in AI and smart grids.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Selected talks, panels, conference presentations, and workshops connecting research with practice.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV · Updated July 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-collaboration",
          title: "Collaboration",
          description: "Academic and industry partnerships in safe, scalable decision-making for future power systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/collaboration/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-preprint-strengthened-and-faster-linear-approximation-to-joint-chance-constraints-with-wasserstein-ambiguity-is-now-available-on-arxiv",
          title: 'Our preprint Strengthened and Faster Linear Approximation to Joint Chance Constraints with Wasserstein...',
          description: "",
          section: "News",},{id: "news-i-officially-received-my-phd-degree-from-the-university-of-edinburgh",
          title: 'I officially received my PhD degree from the University of Edinburgh.',
          description: "",
          section: "News",},{id: "news-our-preprint-fica-faster-inner-convex-approximation-of-chance-constrained-grid-dispatch-with-decision-coupled-uncertainty-is-available-on-arxiv",
          title: 'Our preprint FICA: Faster Inner Convex Approximation of Chance Constrained Grid Dispatch with...',
          description: "",
          section: "News",},{id: "news-i-created-my-first-personal-website",
          title: 'I created my first personal website!',
          description: "",
          section: "News",},{id: "news-we-have-two-papers-accepted-for-power-systems-computation-conference-pscc-2026-see-you-in-limassol-cyprus",
          title: 'We have two papers accepted for (Power Systems Computation Conference) PSCC 2026! See...',
          description: "",
          section: "News",},{id: "news-our-paper-independent-aggregators-securing-end-user-wasserstein-distributionally-robust-flexibility-through-bilevel-incentives-has-been-published-in-applied-energy-and-is-now-available-on-sciencedirect",
          title: 'Our paper, “Independent Aggregators Securing End-User Wasserstein Distributionally Robust Flexibility through Bilevel Incentives,”...',
          description: "",
          section: "News",},{id: "news-we-hosted-the-first-flexedge-project-workshop-at-the-university-of-oxford-with-collaborators-from-imperial-college-london-the-university-of-edinburgh-epcc-and-list-luxembourg-institute-of-science-and-technology",
          title: 'We hosted the first FleXEdge project workshop at the University of Oxford, with...',
          description: "",
          section: "News",},{id: "news-our-preprint-gradmap-gradient-based-multi-agent-proximal-learning-for-grid-edge-flexibility-is-now-available-on-arxiv",
          title: 'Our preprint GradMAP: Gradient-Based Multi-Agent Proximal Learning for Grid-Edge Flexibility is now available...',
          description: "",
          section: "News",},{id: "news-our-paper-strengthened-and-faster-linear-approximation-to-joint-chance-constraints-with-wasserstein-ambiguity-has-been-published-online-in-informs-journal-on-computing",
          title: 'Our paper Strengthened and Faster Linear Approximation to Joint Chance Constraints with Wasserstein...',
          description: "",
          section: "News",},{id: "news-our-preprint-jax-based-batched-ac-power-flow-for-gpu-acceleration-and-ai-ecosystem-integration-is-now-available-on-arxiv",
          title: 'Our preprint JAX-Based Batched AC Power Flow for GPU Acceleration and AI Ecosystem...',
          description: "",
          section: "News",},{id: "news-our-paper-grid-intelligent-ai-data-centres-for-primary-response-is-now-available-in-ieee-transactions-on-industry-applications",
          title: 'Our paper Grid-Intelligent AI Data Centres for Primary Response is now available in...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-special-session-chair-for-ieee-i-amp-amp-cps-asia-2026-special-session-18-on-ai-enabled-optimization-for-integrated-energy-and-transportation-systems-in-smart-cities",
          title: 'I will serve as a Special Session Chair for IEEE I&amp;amp;amp;CPS Asia 2026...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-special-session-chair-for-ieee-ei2-2026-special-session-02-on-collaborative-planning-and-operation-of-source-network-load-storage-in-new-type-power-systems",
          title: 'I will serve as a Special Session Chair for IEEE EI2 2026 Special...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-supervised-reinforcement-learning-for-the-coordination-of-distributed-energy-resources-at-pscc-2026-in-limassol-cyprus",
          title: 'I presented our work on Supervised Reinforcement Learning for the Coordination of Distributed...',
          description: "",
          section: "News",},{id: "news-our-preprint-supervised-reinforcement-learning-for-the-coordination-of-distributed-energy-resources-is-now-available-on-arxiv",
          title: 'Our preprint Supervised Reinforcement Learning for the Coordination of Distributed Energy Resources is...',
          description: "",
          section: "News",},{id: "news-i-spoke-on-ai-data-centres-power-burden-or-future-grid-flexibility-backbone-during-london-climate-action-week-presenting-our-latest-work-on-data-centre-grid-intelligence-and-compute-flexibility-at-the-zero-institute-university-of-oxford",
          title: 'I spoke on AI Data Centres: Power Burden or Future Grid Flexibility Backbone?...',
          description: "",
          section: "News",},{id: "news-our-preprint-decision-focused-scenario-generation-and-selection-for-efficient-and-robust-grid-dispatch-is-now-available-on-arxiv",
          title: 'Our preprint Decision-Focused Scenario Generation and Selection for Efficient and Robust Grid Dispatch...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%68%6F%6E%67.%7A%68%6F%75@%65%6E%67.%6F%78.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cY3c6eUAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yihong-zhou-dr", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yihong-zhou", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5015-8661", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Yihong-Zhou-3/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
