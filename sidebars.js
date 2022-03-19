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
    {
      type: 'category',
      label: 'Links 🔗',      
      items: [
        {
          type: 'link',
          label: 'Twitter',
          href: 'https://twitter.com/vinyl_finance',
        },
        {
          type: 'link',
          label: 'Discord',
          href: 'https://discord.gg/VqwsjEFVzc',
        },
        {
          type: 'link',
          label: 'Vinyl Chart',
          href: 'https://www.defined.fi/ftm/0x30b2b4c9b7a6d2840a0d6be07778dace3e08e756?cache=2efe3',
        },
        {
          type: 'link',
          label: 'Tracks Chart',
          href: 'https://www.defined.fi/ftm/0x56a596a8b0dd8d3af0c60006261f8963b0c217c3?cache=7012d',
        }
      ],
    },
  ],
};

module.exports = sidebars;
