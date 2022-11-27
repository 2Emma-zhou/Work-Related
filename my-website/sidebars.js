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
        'Getting Started/Installing supCollector',
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
        label: 'Connecting supCollector',
        link: {
          type: 'generated-index',
        },
        items: [
          'Using supOS/Connecting supCollector/Collector Type',
'Using supOS/Connecting supCollector/Configuring supCollector',
'Using supOS/Connecting supCollector/Connecting Simulate Collector',
'Using supOS/Connecting supCollector/Connecting Common Collector',
'Using supOS/Connecting supCollector/Connecting Cascading Collector',
'Using supOS/Connecting supCollector/Connecting Third-party Collector',
'Using supOS/Connecting supCollector/Data Write Back',
'Using supOS/Connecting supCollector/Supported Driver',
        ]
        },
        {type: 'category',
        label: 'Factory Modeling',
        link: {
          type: 'generated-index',
        },
        items: [
          'Using supOS/Factory Modeling/Introduction',
          'Using supOS/Factory Modeling/Modeling Process',
          'Using supOS/Factory Modeling/Creating Object Template',
          'Using supOS/Factory Modeling/Creating Object Instance',
'Using supOS/Factory Modeling/Other Operations',
'Using supOS/Factory Modeling/Third-party Database Connection',

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
    'API/Embedded Service',
    'API/Global APIs',
    'API/Jsql Guide',
    'API/Element Script',
    'API/Workflow Script',
    {
      type: 'category',
      label: 'OpenAPI',
      link: {
          type: 'generated-index',
      },
      items: [
        'Open API/HTTP Request',
  {
    type: 'category',
      label: 'Factory Modeling',
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
      label: 'Identity Authentication',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  }, 
  {
    type: 'category',
      label: 'APP Design Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  }, 
  {
    type: 'category',
      label: 'APP Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'Big Data Model Analysis',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'Big Data Model Training',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'Configuration Information',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'Data Push',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'Authentication Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'Notification Center',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'System Code',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'User Management',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
    'Open API/Identity Authentication/oauth2',
    ]
  },
  {
    type: 'category',
      label: 'Workflow',
      link: {
          type: 'generated-index',
      },
      items: [
    'Open API/Identity Authentication/2.8.1',
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
      label: 'supCollector Connection Demo',
      link: {
          type: 'generated-index',
      },
      items: [
        'supCollector Connection Demo/OPC DA',
        'supCollector Connection Demo/Modbus',
      
      ]
    },
    'API/Common OpenAPI Demo',
  ],
  class: [
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
      label: 'Low Code Development',
      link: {
          type: 'generated-index',
      },
      items: [
        'class series/Low Code Development/Sales Order Workflow',
        'class series/Low Code Development/OpenAPI Example',
        'class series/Low Code Development/Staff Information Demo',
      
      ]
    },
      
  ]
   
};

module.exports = sidebars;
