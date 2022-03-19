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
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction 👋',
      items: ['welcome', 'team'],
    },
    {
      type: 'category',
      label: 'Protocol Info 🎙',
      items: [
        'protocol-info/tokens', 
        'protocol-info/genesis-pools-and-token-allocation', 
        'protocol-info/expansion', 
        'protocol-info/contraction', 
        'protocol-info/roadmap', 
        'protocol-info/contracts'
      ],
    },
    {
      type: 'category',
      label: 'Guides 🎼',
      items: [
        'guides/how-to-buy-vinyl-and-tracks',
        'guides/profit-strategies', 
      ],
    },
  ],
};

module.exports = sidebars;
