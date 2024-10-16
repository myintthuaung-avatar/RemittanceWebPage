export default class DataIterator {

    total= 0
    search =  ''
    options = {
        sortDesc: [true],
        page: 1,
        itemsPerPage: 24,
        sortBy: ["id"],
    }

    footerProps = {
        "items-per-page-options": [12, 24, 50, 100, 500]
    }

    items = []


    getParams()  {
        return {
            page : this.options.page,
            itemsPerPage : this.options.itemsPerPage,
            sortDesc : this.options.sortDesc ? this.options.sortDesc[0] : [false],
            sortBy : this.options.sortBy ? this.options.sortBy[0] : ['id'],
        }
    }

    
    
    constructor() {

    }
}