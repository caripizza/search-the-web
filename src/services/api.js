var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2018-12-03&' +
          'sortBy=popularity&' +
          'apiKey=249ab959bc50472b8f9bc61d6919eb9e';

var req = new Request(url);

fetch(req)
  .then(function(response) {
    console.log(response.json());
  });