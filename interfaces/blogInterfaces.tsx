export interface BlogHighlightData {
  data: {
    items: [{ title: string, slug: string, date: string, listingImage: string, category: string}]
  }
}

export interface BlogListing {
  page: {
    title: string,
    metaDescription: string,
    content: string
  },
  newest : {
    items: [{ title: string, slug: string, date: string, listingImage: string, category: string}]
  },
  listing: {
    items: [{ title: string, slug: string, date: string, listingImage: string, category: string}]
  }
}
