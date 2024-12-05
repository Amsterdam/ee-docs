# Search

This application uses Algolia for the search, as it is the [official Docusaurus search plugin](https://docusaurus.io/docs/search#using-algolia-docsearch) and provides a quick and easy search solution.

## Config

To implement this you need an Algolia Application. You can complete [this form](https://docsearch.algolia.com/apply/) and they will configure everything for you. Otherwise via the [Algolia dashboard](https://dashboard.algolia.com/), you need to create an Application.

When creating an application manually, you need to link a `Crawler` to index the relevant content. Via the `Connectors` page you can link a `Crawler`. This comes with various config options, which can be seen when editing crawlers under the `Setup / Editor` page.

The default Docusaurus v2 & v3 config should follow this template:

```js
new Crawler({
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_API_KEY',
  rateLimit: 8,
  maxDepth: 10,
  startUrls: ['https://YOUR_WEBSITE_URL/'],
  sitemaps: ['https://YOUR_WEBSITE_URL/sitemap.xml'],
  ignoreCanonicalTo: true,
  discoveryPatterns: ['https://YOUR_WEBSITE_URL/**'],
  actions: [
    {
      indexName: 'YOUR_INDEX_NAME',
      pathsToMatch: ['https://YOUR_WEBSITE_URL/**'],
      recordExtractor: ({ $, helpers }) => {
        // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
        const lvl0 =
          $(
            '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
          )
            .last()
            .text() || 'Documentation';

        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: '',
              defaultValue: lvl0,
            },
            lvl1: ['header h1', 'article h1'],
            lvl2: 'article h2',
            lvl3: 'article h3',
            lvl4: 'article h4',
            lvl5: 'article h5, article td:first-child',
            lvl6: 'article h6',
            content: 'article p, article li, article td:last-child',
          },
          indexHeadings: true,
          aggregateContent: true,
          recordVersion: 'v3',
        });
      },
    },
  ],
  initialIndexSettings: {
    YOUR_INDEX_NAME: {
      attributesForFaceting: [
        'type',
        'lang',
        'language',
        'version',
        'docusaurus_tag',
      ],
      attributesToRetrieve: [
        'hierarchy',
        'content',
        'anchor',
        'url',
        'url_without_anchor',
        'type',
      ],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'content'],
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
      separatorsToIndex: '_',
    },
  },
});
```

A lot of these simpler options can also be configured through the `Setup / Configuration` page.

**Note the return from `recordExtractor` in line 42 has been edited, changing `lvl1: ['header h1', 'article h1'],` to `lvl1: ['article h1'],` otherwise the indexer will also index the word `Developers` from the global header title.**
