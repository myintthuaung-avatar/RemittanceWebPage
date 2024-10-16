export default class DataTable {

    selected = []
    total= 0
    search =  ''
    options = {
        page: 1,
        itemsPerPage: 10,
        sortBy: [{ key: "id", order: "asc" }],
    }

    footerProps = {
        "items-per-page-options": [10, 20, 50, 100, 500]
    }

    items = []


    getParams()  {
        return {
            page : this.options.page,
            itemsPerPage: this.options.itemsPerPage,
            sortBy : this.options.sortBy,
        }
    }

    hasPrevPages() {
        if(this.options.page > 1) {
            return true;
        }else {
            return false;
        }
    }

    hasMorePages() {
        let pages = this.total / this.options.itemsPerPage;
        if(pages > this.options.page) {
            
            return true;
        }else {
            
            return false;
        }
    }


    
    
    constructor() {

    }
}