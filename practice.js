 // * Write an aggregation query on the "item" collection to return the
 //        * total number of items in each category. The documents in the array
 //        * output by your aggregation should contain fields for "_id" and "num".
 //        *
 //        * HINT: Test your mongodb query in the shell first before implementing
 //        * it in JavaScript.


db.item.aggregate([
    { $group: {
        _id: "$category",
        num: { $sum: 1}
    }}
]);

  /*
         * TODO-lab1B
         *
         * LAB #1B: Implement the getItems() method.
         *
         * Create a query on the "item" collection to select only the items
         * that should be displayed for a particular page of a given category.
         * The category is passed as a parameter to getItems().
         *
         * Use sort(), skip(), and limit() and the method parameters: page and
         * itemsPerPage to identify the appropriate products to display on each
         * page. Pass these items to the callback function.
         *
         * Sort items in ascending order based on the _id field. You must use
         * this sort to answer the final project questions correctly.
         *
         * Note: Since "All" is not listed as the category for any items,
         * you will need to query the "item" collection differently for "All"
         * than you do for other categories.
         *
         */

db.item.find({ "category": category})

/*
12 items
5 items per page

page 1 = items 1-5 ==> skip (0)
page 2 = items 6-10 ==> skip (5)
page 3 = items 11-12 ==> skip (10)

(page - 1) * items-per-page = skip
*/ 


db.item.createIndex({
    title: "text",
    slogan: "text",
    description: "text"
})