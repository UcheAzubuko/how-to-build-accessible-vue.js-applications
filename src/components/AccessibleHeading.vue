<template>
  <!-- With ARIA, it's possible to add the role of heading and the aria-level
  attribute to an element. Or even change the level of a heading: -->

  <div role="heading" aria-level="1">App Heading</div>
  <h2 aria-level="3">The App Heading</h2>

  <!-- Display of hierarchical order of headings -->

  <!-- Hierarchical order means that headings are arranged in an order from the most important to least important.
     The h1 is the most important heading level, while the h6 is the least important.

In practice, for web content, you will use the h1 for the page title, give the most important sections an h2, and, if needed, add an h3 or maybe even an h4 to divide the content in the h2 section.

You only need to start with the h1 if that makes sense for your content structure and design. For example:

    h2 = main menu
h1 = title of a news article
    h2 = subheading in the content of the news article
        h3 = subheading of the h2
            h4 = subheading of the h3
    h2 = subheading in the content of the news article
    h2 = Related news (the aside section)
    h2 = Contact us (in the footer)
        h3 = Address (the address information)
        h3 = Follow us (social media links) -->
</template>
