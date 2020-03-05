const tree = [{
  pageTitle: 'iab',
  category: 'automotive',
  childNodes: [
    {
      title: 'auto body styles', 
      subChildNodes: [
        'commercial trucks', 
        'sedan', 
        'station wagon', 
        'suv', 
        'van',
        'convertible', 
        'coupe', 
        'crossover', 
        'hatchback', 
        'microcar', 
        'minivan', 
        'off-road vehicles', 
        'pickup trucks'
      ],   
    },
    {
      title: 'auto type', 
      subChildNodes: [
        'budget cars', 
        'certified pre-owned cars', 
        'classic cars', 
        'concept cars', 
        'driverless cars',
        'green vehicles', 
        'luxury cars', 
        'performance cars'
      ],   
    }, 
    {
      title: 'car culture',  
      subChildNodes: [],   
    }, 
    {
      title: 'dash cam videos',
      subChildNodes: [],    
    }, 
    {
      title: 'motorcycles',
      subChildNodes: [],    
    }, 
    {
      title: 'road-side assistance',
      subChildNodes: [],    
    }, 
    {
      title: 'scooters',
      subChildNodes: [],    
    },
    {
      title: 'auto buying and selling',
      subChildNodes: [],    
    },
    {
      title: 'auto insurance',
      subChildNodes: [],    
    },
    {
      title: 'auto parts',
      subChildNodes: [],    
    },
    {
      title: 'auto recalls',
      subChildNodes: [],    
    },
    {
      title: 'auto repair',
      subChildNodes: [],    
    },
    {
      title: 'auto safety',
      subChildNodes: [],    
    },
    {
      title: 'auto shows',
      subChildNodes: [],    
    },
    {
      title: 'auto technology',
      subChildNodes: [
        'auto infotainment technologies',
        'auto naviagtion systems',
        'auto safety technologies'
      ],    
    },
    {
      title: 'auto rentals',
      subChildNodes: [],    
    }, 
  ], 
},
{
  category: 'books and literature',
  childNodes: [
    {
      title: 'art and photography books',
      subChildNodes: []
    },
    {
      title: 'biographies', 
      subChildNodes: []
    },
    {
      title: 'children\'s literature', 
      subChildNodes: []
    },
    {
      title: 'comics and graphic novels', 
      subChildNodes: []
    },
    {
      title: 'cookbooks', 
      subChildNodes: []
    },
    {
      title: 'fiction', 
      subChildNodes: []
    },
    {
      title: 'poetry', 
      subChildNodes: []
    },
    {
      title: 'travel books', 
      subChildNodes: []
    },
    {
      title: 'young adult literature', 
      subChildNodes: []
    }
  ]
 },
 {
  category: 'business and finance',
  childNodes: [
    {
      title: 'business',
      subChildNodes: [
        'business accounting and finance',
        'human resources',
        'large business', 
        'logistics',
        'marketing and advertising',
        'sales',
        'small and medium-sized business',
        'startups',
        'business administration',
        {
          title: 'business banking and finance',
          grandchildNodes: [
              'angel investment',
              'bankruptcy',
              'business loans',
              'debt factoring and invoice discounting',
              'mergers and acquisitions',
              'private equity',
              'sale and lease back',
              'venture capital'
          ]
       }, 
       'business I.T.', 
       'business operations',
       {
         title: 'consumer issues', 
         grandchildNodes: [
           'recalls'
         ]
       }, 
       'executive leadership and management', 
       'government business',
       'green solutions',
       'business utilities'
      ], 
    },
    {
      title: 'economy',
      subChildNodes: [
        'commodities',
        'currencies',
        'financial crisis',
        'financial reform',
        'financial regulation',
        'gasoline prices',
        'housing market',
        'interest rates',
        'job market'
      ]
    }, 
    {
      title: 'industries', 
      subChildNodes: [
        'advertising industry',
        'education industry',
        'entertainment industry',
        'environmental services industry',
        'financial industry',
        'food industry',
        'healthcare industry',
        'hospitality industry',
        'information services industry',
        'legal services industry',
        'agriculture',
        'management consulting industry',
        'manufacturing industry',
        'mechanical and industrial engineering industry',
        'media industry',
        'metals industry',
        'non-profit organizations',
        'pharmaceutical industry',
        'power and energy industry',
        'publishing industry',
        'real estate industry',
        'apparel industry', 
        'retail industry',
        'technology industry', 
        'telecommunications industry',
        'automotive industry',
        'aviation industry',
        'biotech and biomedical industry',
        'civil engineering industry',
        'construction industry',
        'defense industry'
      ]
    }
  ] 
 }, 
 {
  category: 'careers', 
  childNodes: [
    {
      title: 'apprenticeships', 
      subChildNodes: []
    }, 
    {
      title: 'career advice',
      subChildNodes: []
    },
    {
      title: 'career planning', 
      subChildNodes: []
    }, 
    {
      title: 'job search',
      subChildNodes: [
        'job fairs', 
        'resume writing and advice'
      ]
    }, 
    {
      title: 'remote working',
      subChildNodes: []
    }, 
    {
      title: 'vocational training', 
      subChildNodes: []
    }
  ]
 }, 
 {
   category: 'education', 
   childNodes: [
     {
      title: 'adult education', 
      subChildNodes: []
     }, 
     {
       title: 'private school',
       subChildNodes: []
     }, 
     {
       title: 'secondary education',
       subChildNodes: []
     }, 
     {
       title: 'special education',
       subChildNodes: []
     }, 
     {
       title: 'college education', 
       subChildNodes: [
         {
          title: 'postgraduate education', 
          grandchildNodes: [
            'professional school'
          ]
         },
         'college planning',
         'undergraduate education'
       ]
     }, 
     {
       title: 'early childhood education', 
       subChildNodes: []
     }, 
     {
       title: 'educational assessment',
       subChildNodes: [
         'standardized testing'
       ]
     }, 
     {
       title: 'homeschooling', 
       subChildNodes: []
     }, 
     {
       title: 'homework and study', 
       subChildNodes: []
     }, 
     {
       title: 'language and learning',
       subChildNodes: []
     },
     {
       title: 'online education', 
       subChildNodes: []
     },
     {
       title: 'primary education',
       subChildNodes: []
     }
    ]
  }
]

export default tree; 
