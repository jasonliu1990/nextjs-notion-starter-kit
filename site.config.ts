import { siteConfig } from './lib/site-config'

export default siteConfig({
   // the site's root Notion page (required)
  rootNotionPageId: 'Web-eb793c9cf7334779a5ba6fed7cb74b8d',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,
  // basic site info (required)
  name: '筆記',
  domain: 'https://evening-tablecloth-085.notion.site/Web-eb793c9cf7334779a5ba6fed7cb74b8d',
  author: 'Jason Liu',
  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',
  // social usernames (optional)
  twitter: '',
  github: 'jasonliu1990',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
    navigationStyle: 'custom',
    navigationLinks: [
	{
        title: 'About',
        pageId: 'about-9f0df163e72a43be925f935e19ca84ad'
    },
       {
         title: 'Contact',
         pageId: 'Contact-2f09c9def694410b980b6682744c5322'
       }
    ]
	
	
})
