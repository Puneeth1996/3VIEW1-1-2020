const ListingsAPI = {
    listings: [
      { number: 1, name: "1 = House in West California", },
      { number: 2, name: "2 = Villa in Milano", },
      { number: 3, name: "3 = Villa in West Barcelona", },
      { number: 4, name: "4 = Villa in Milano", },
      { number: 5, name: "5 = Villa in West Barcelona", },
      { number: 6, name: "6 = House in Holloywood Hills"},
      { number: 7, name: "7 = Luxurious beach in Port of Maimi"}
    ],
    all: function() { return this.listings },
    get: function(id) {
      const oneListingItem = p => p.number === id
      return this.listings.find(oneListingItem)
    },
    featuredProperties: function() {
      return this.listings.slice(-3, )
    },
  }
  
  export default ListingsAPI