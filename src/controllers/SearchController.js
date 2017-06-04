import amazonApi from 'amazon-product-api'
let client = amazonApi.createClient({
    awsID: "",
    awsSecret: "",
    awsTag: " "
});


class SearchController {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    index() {
        try {
            return this.res.render('index', { title: 'Testing', message: 'First Comment!'})
        } catch(err) {
            return this.res.render('index', { title: 'ERROR', message: 'Error'})
        }
    }

    async search() {
        try {
            let results = await client.itemSearch({
                title: this.req.body.searchString,
                responseGroup: 'ItemAttributes'
            });
            console.log(results);
            return this.res.render('results', { title: 'List of results', listResult:  })
        } catch(err) {
            return this.res.render('index', { title: 'ERROR', message: 'Error'})
        }
    }
}

export default SearchController