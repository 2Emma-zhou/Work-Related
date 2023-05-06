/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'Getting Started/System Requirements',
        'Getting Started/Installing supOS Platform',
        
      ],
      
    },
    
    {
      type: 'category',
      label: 'Using supOS',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'Using supOS/Login',
        'Using supOS/Process Flowchart',
        
        
        {type: 'category',
        label: 'Factory Modeling',
        link: {
          type: 'generated-index'
        },
        items: [
          'Using supOS/Factory Modeling/Introduction',
          'Using supOS/Factory Modeling/Modeling Process',
          'Using supOS/Factory Modeling/Creating Object Template',
          'Using supOS/Factory Modeling/Creating Object Instance',
'Using supOS/Factory Modeling/Other Operations',
'Using supOS/Factory Modeling/Third-party Database Connection',
'API/Embedded Service',
              'API/Global APIs',
              'API/Jsql Guide',
              'Open API/Call OpenAPI in Service',

        ]
        },
        {type: 'category',
        label: 'Application Development',
        link: {
          type: 'generated-index',
        },
        items: [
          {
            type: 'category',
            label: 'Application Design',
            link: {
                type: 'generated-index',
                
            },
            items: [
              'Using supOS/APP Design/APP/Designing Process',
          'Using supOS/APP Design/APP/Creating an Application',
           'Using supOS/APP Design/APP/Designing a Page',
           {
            type: 'category',
            label: 'Free Layout',
            link: {
                type: 'generated-index',
            },
            items: [
              'Using supOS/APP Design/APP/Free Layout/Arranging Page Blocks',
              'Using supOS/APP Design/APP/Free Layout/Page Description',
              'Using supOS/APP Design/APP/Free Layout/Quick Operations',
              'Using supOS/APP Design/APP/Free Layout/Data Linkage',
            ]
           },
           {
            type: 'category',
            label: 'Grid Layout',
            link: {
                type: 'generated-index',
            },
            items: [
              'Using supOS/APP Design/APP/Grid Layout/Page Description',
              'Using supOS/APP Design/APP/Grid Layout/Property Description',
              'Using supOS/APP Design/APP/Grid Layout/Quick Operations',
              'Using supOS/APP Design/APP/Grid Layout/Data Linkage',
            ]
           },
           'Using supOS/APP Design/APP/Layout Scenario',
          'Using supOS/APP Design/APP/Dynamic Effect',
          
          'Using supOS/APP Design/APP/Element Details',
          'API/Element Script',
    'API/Programmable Component',
            ]
          },
          {
            type: 'category',
            label: 'Workflow Design',
            link: {
                type: 'generated-index',
            },
            items: [
              'Using supOS/APP Design/Workflow Design/Overview',
              'Using supOS/APP Design/Workflow Design/Process',
              'Using supOS/APP Design/Workflow Design/Workflow Creation',
              'Using supOS/APP Design/Workflow Design/Element Description',
              'Using supOS/APP Design/Workflow Design/Page Description',
              
              
              'API/Workflow Script',
            ]
          },
         
        ]
        },
        {
          type: 'category',
          label: 'Operation Center Monitoring',
          link: {
              type: 'generated-index',
          },
          items: [
            
            'Using supOS/Monitoring/Overview',
'Using supOS/Monitoring/Business Process',
'Using supOS/Monitoring/Trend Chart Operations',
'Using supOS/Monitoring/Dashboard',
'Using supOS/Monitoring/Alarm',
'Using supOS/Monitoring/Video',
'Using supOS/Monitoring/Production Report',
          ]
        },
        
      ],
    },
    {
      type: 'category',
      label: 'System Configuration',
      link: {
          type: 'generated-index',
      },
      items: [
        'System Configuration/Organization Management',
        'System Configuration/User Security Management',
        'System Configuration/System Management',
        'System Configuration/Computing Task',
        'System Configuration/Global Configuration',
        'System Configuration/Message Management',
      ]
    },
   
  ],

  // But you can create a sidebar manually
 
  api: [
   
    {
      type: 'category',
      label: 'OpenAPI',
      link: {
          type: 'generated-index',
      },
      items: [
        'Open API/Error Code Reference',
        
  {
    type: 'category',
      label: 'Object Modeling',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Object Modeling/Network',
    'Open API/Object Modeling/Alarm',
'Open API/Object Modeling/Event',
'Open API/Object Modeling/History Alarm',
'Open API/Object Modeling/Instance',
'Open API/Object Modeling/Label',
'Open API/Object Modeling/Attribute',
'Open API/Object Modeling/Relation',
'Open API/Object Modeling/Running Functions',
'Open API/Object Modeling/Template',
    ]
  }, 
  {
    type: 'category',
      label: 'APP Design Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/APP Design Management/Pages',
    'Open API/APP Design Management/Layouts',
    'Open API/APP Design Management/Object Data',

    ]
  }, 
  {
    type: 'category',
      label: 'APP Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/APP Management/Apps',
    ]
  },
  {
    type: 'category',
      label: 'Big Data Model Analysis',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Big Data Model Analysis/Data Mining Runtime',
    ]
  },
  {
    type: 'category',
      label: 'Big Data Model Training',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Big Data Model Training/Data Mining',
    ]
  },
  {
    type: 'category',
      label: 'Workflow',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Workflow/Task',
    'Open API/Workflow/Process',
    ]
  },
  {
    type: 'category',
      label: 'Configuration Information',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Configuration Information/Config',
    ]
  },
  {
    type: 'category',
      label: 'Data Push',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Data Push/Webhook',
    ]
  },
  {
    type: 'category',
      label: 'Authentication Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Authentication Management/Quota',
    ]
  },
  {
    type: 'category',
      label: 'Organization',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Organization/Orgs',
    ]
  },
  {
    type: 'category',
      label: 'Notification Center',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Notification Center/V1',
    'Open API/Notification Center/V2',
    ]
  },
  {
    type: 'category',
      label: 'System Code',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/System Code/System Codes',
    ]
  },
  {
    type: 'category',
      label: 'User Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/User Management/Users',
    ]
  },
  {
    type: 'category',
      label: 'Identity Authentication',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/oauth2',
    ]
  },
  
      ]
    },
      
  ],
  video: [
    'Video/Dashboard Development Step by Step',
    {
      type: 'category',
      label: 'X-Collector Connection Demo',
      link: {
          type: 'generated-index',
      },
      items: [
        'X-Collector Connection Demo/OPC DA',
        'X-Collector Connection Demo/Modbus',
      
      ]
    },
    {
      type: 'category',
      label: 'Low Code Development',
      link: {
          type: 'generated-index',
      },
      items: [
        'Low Code Development/Gas Monitoring Process Demo',
        'Low Code Development/Sales Order Demo',
        'Low Code Development/Sales Order Approval Workflow Demo',
        'Low Code Development/Sales Order Dashboard Demo',
        'Low Code Development/Sales Order Report Demo',
      ]
    },
    
    {
      type: 'category',
      label: 'Open API Demo',
      link: {
          type: 'generated-index',
      },
      items: [
        'OpenAPI demo/OpenAPI Internal Usage Demo',
        'OpenAPI demo/OpenAPI External Usage Demo',
      
      ]
    }, 
    {
      type: 'category',
      label: 'Data Collection',
      link: {
          type: 'generated-index',
      },
      items: [
        'class series/Data Collection/Collecting Data through Modbus',
         'class series/Data Collection/Collecting Data through OPC DA',
        'class series/Data Collection/Collecting Video Data through RTSP',
        'class series/Data Collection/Collecting Data from External Database',
        // 'class series/Data Collection/Collecting Data through MQTT',
      
      ]
    },
    {
      type: 'category',
      label: 'Factory Modeling',
      link: {
          type: 'generated-index',
      },
      items: [
        // 'class series/Low Code Development/Sales Order Workflow',
        'class series/Factory Modeling/Object Model Introduction',
        'class series/Factory Modeling/Object Model Introduction_2',
        'class series/Factory Modeling/Embedded Service Video',
        'class series/Factory Modeling/JSQL',

        // 'class series/Low Code Development/Staff Information Demo',
      
      ]
    },
    {
      type: 'category',
      label: 'Low Code Development',
      link: {
          type: 'generated-index',
      },
      items: [
        'class series/Low Code Development/Sales Order Workflow',
        'class series/Low Code Development/Staff Information Demo',
      
      ]
    },
    {
      type: 'category',
      label: 'Open API',
      link: {
          type: 'generated-index',
      },
      items: [
        // 'class series/Low Code Development/Sales Order Workflow',
        'class series/Open API/OpenAPI Internal Usage',
        'class series/Open API/OpenAPI External Usage',
        'class series/Open API/Global API',
      
      ]
    },
  ],
  supCollector: [
    'Getting Started/System Requirements sc',
        'Getting Started/Installing X-Collector',  
        
      {type: 'category',
        label: 'Connecting X-Collector',
        link: {
          type: 'generated-index',
        },
        items: [
          'Using supOS/Connecting X-Collector/Collector Type',
'Using supOS/Connecting X-Collector/Configuring X-Collector',
'Using supOS/Connecting X-Collector/Connecting Simulate Collector',
'Using supOS/Connecting X-Collector/Connecting Common Collector',
'Using supOS/Connecting X-Collector/Connecting Cascading Collector',
'Using supOS/Connecting X-Collector/Connecting Third-party Collector',
'Using supOS/Connecting X-Collector/Data Write Back',
'Using supOS/Connecting X-Collector/Supported Driver',
        ]
        },
        {type: 'category',
        label: 'Appendix',
        link: {
          type: 'generated-index',
        },
        items: [
          'Getting Started/Appendix/Disable Windows Update Service',
          'Getting Started/Appendix/Migrate Authorization',
        'Getting Started/Appendix/Update Error Solution',
        'Getting Started/Appendix/Net Program Installation',
        'Getting Started/Appendix/Change Login Port',
        ],
      },
  ],
  supETL: [
    
    'Getting Started/System Requirements se',
    'Getting Started/Extension Installation/Installing X-ETL',

    {
      type: 'category',
      label: 'Using X-ETL',
      link: {
          type: 'generated-index',
      },
      items: [
        'Getting Started/Using supETL/Process Diagram',
        {
          type: 'category',
          label: 'Data Connection',
          link: {
              type: 'generated-index',
          },
          items: [
            'Getting Started/Using supETL/Overview',
            'Getting Started/Using supETL/Connecting Data',
            'Getting Started/Using supETL/Data Source Description',
          ]
        },
        {
          type: 'category',
          label: 'Task Configuration',
          link: {
              type: 'generated-index',
          },
          items: [
        'Getting Started/Using supETL/Adding Data Task',
        'Getting Started/Using supETL/Configuring Data Task',
        'Getting Started/Using supETL/Publishing Data Task',
        'Getting Started/Using supETL/Task Node Description',
          ]
        },
        'Getting Started/Using supETL/Task Overview',
        'Getting Started/Using supETL/Task O&M',
        'Getting Started/Using supETL/Task Kinship',
      ]
    },
    {
      type: 'category',
      label: 'Data Migration',
      link: {
          type: 'generated-index',
      },
      items: [
        'Getting Started/Using supETL/Enabling CDC',
        'Getting Started/Using supETL/Migrating Database',
      ]
    },
  ],
  supDAM: [
    
    'Getting Started/System Requirements sd',
    'Getting Started/Extension Installation/Installing X-DAM',
    {
      type: 'category',
      label: 'Using X-DAM',
      link: {
          type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Data Asset',
          link: {
              type: 'generated-index',
          },
          items: [
            'Getting Started/Using supDAM/Data Asset/Data Asset Directory',
            'Getting Started/Using supDAM/Data Asset/Metadata Collection',
            'Getting Started/Using supDAM/Data Asset/Metadata Center',
            'Getting Started/Using supDAM/Data Asset/Data Resource Overview',
            'Getting Started/Using supDAM/Data Asset/Data Resource Statistics',
          ]
        },
        {
          type: 'category',
          label: 'Data Governance',
          link: {
              type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: 'Data Standard',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Getting Started/Using supDAM/Data Standard/Standards Management',
                'Getting Started/Using supDAM/Data Standard/Standards Execution',
                'Getting Started/Using supDAM/Data Standard/Standards Overview',
              ]
            },
            {
              type: 'category',
              label: 'Data Quality',
              link: {
                  type: 'generated-index',
              },
              items: [
                'Getting Started/Using supDAM/Data Quality/QC Rule',
                'Getting Started/Using supDAM/Data Quality/QC Task',
                'Getting Started/Using supDAM/Data Quality/Quality Analysis',
                'Getting Started/Using supDAM/Data Quality/Execution Records',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Data Service',
          link: {
              type: 'generated-index',
          },
          items: [
            'Getting Started/Using supDAM/Data Service/Service Development',
            'Getting Started/Using supDAM/Data Service/Service Management',
            'Getting Started/Using supDAM/Data Service/Service Overview',
          ]
        },
      ]
    },
  ],
  supEdge: [
    
    'Getting Started/System Requirements sedge',
    'Getting Started/Installing X-Edge',
    {
      type: 'category',
      label: 'Using X-Edge',
      link: {
          type: 'generated-index',
      },
      items: [
        'Getting Started/Using supEdge/Process Diagram',
        'Getting Started/Using supEdge/Connecting Video Source',
        'Getting Started/Using supEdge/Configuring Algorithm',
        'Getting Started/Using supEdge/Configuring Monitoring Design',
        'Getting Started/Using supEdge/Assigning Permission',
        'Getting Started/Using supEdge/Video Monitoring',
      
      ]
    },
    'Getting Started/Integrating Third-party Algorithms in X-Edge',
    'Getting Started/Using supEdge/Algorithm Description',

      
  ],
  supBD: [
    
    'Getting Started/System Requirements sb',
    'Getting Started/Extension Installation/Installing X-BD',
      
  ],
  supLink: [
    
    'Getting Started/System Requirements sl',
    'Getting Started/Installing supLink',
      
  ],
   
};

module.exports = sidebars;
