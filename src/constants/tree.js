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
       }
      ], 
    }
  ] 
 }
]

export default tree; 
