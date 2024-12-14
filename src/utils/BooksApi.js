class BooksApi {
    constructor({url}) {
        this._url = url;
    }

    _getResponse(response) {
        if(response.ok){
            return response.json();
        } else {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
    }

    getBooks() {
        return fetch(`${this._url}/en/books`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        })
        .then(this._getResponse)
    }

}

const booksApi = new BooksApi({
    url: 'https://potterapi-fedeperin.vercel.app',
});

export default booksApi;