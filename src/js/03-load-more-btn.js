import '../css/common.css';

const options = {
headers: {
    Authorization: '15038c1cf1024f0f88ddd0a11fc0f440',
},
};

const url = 'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=8&page=1';


fetch(url, options)
.then(r => r.json)
.then(console.log)