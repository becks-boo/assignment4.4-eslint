const {parse} = require("nodemon/lib/cli");

class Search {
    searchableObjects;

    /**
     * @example searchableObjects = [
     *  {"id": 1, "title": "Test-Title 1", "url": "https://google.com"},
     *  {"id": 2, "title": "Test-Title 2", "url": "https://youtu.be"},
     * ]
     *
     * @param searchableObjects
     */
    constructor(searchableObjects) {
        this.searchableObjects = searchableObjects;
    }

    filterByTitle(title) {
        if (!title) throw Error("Please type in a title.");
        const lowerCaseTitle = title.toLowerCase();

        return this.searchableObjects.filter(element => {
            const loweredElementTitle = element.title.toLowerCase();

            return loweredElementTitle.includes(lowerCaseTitle);
        });
    }

    filterByUrl(url) {
        const lowerCaseUrl = url.toLowerCase();

        return this.searchableObjects.filter(element => {
            const loweredElementUrl = element.url.toLowerCase();

            return loweredElementUrl.includes(lowerCaseUrl);
        }); // @TODO implement similarly to filterByTitle
    }

    getById(id) {
        return this.searchableObjects.filter(element => {
            if (element.id === parseInt(id)) {
                return element.id;
            }
        }); // @TODO implement similarly to filterByTitle (careful! id is an integer, not a string!)
    }

    addSearchableObject(object) {
        this.searchableObjects.push(object);
        // return this.searchableObjects;
        // @TODO push object into array
    }

    getSearchableObjects() {
        return this.searchableObjects;
    }
}

module.exports = Search;
