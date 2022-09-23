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
    'API/API Script',
    'API/Jsql Guide',
      {
        type: 'category',
        label: 'Low Code Development',
        link: {
            type: 'generated-index',
        },
        items: [
          'Low Code Development/Gas Monitoring Process Demo',
          'Low Code Development/Sales Order Demo',
          'Low Code Development/Order Approval Workflow Demo',
          'Low Code Development/Sales Order Dashboard Demo',
          'Low Code Development/Sales Order Report Demo',
        ]
      },
  ],
  video: [
    'Video/Dashoboard'
  ]

};

module.exports = sidebars;
