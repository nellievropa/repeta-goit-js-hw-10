const e={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles"),loadMoreBtn:document.querySelector('[data-action="load more"]')},t=new class{fetchArticles(){console.log(this);const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}`;fetch(e,{headers:{Authorization:"15038c1cf1024f0f88ddd0a11fc0f440"}}).then((e=>e.json)).then((e=>{this.page+=1}))}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};e.searchForm.addEventListener("submit",(function(e){e.preventDefault(),t.query=e.currentTarget.elements.query.value,t.fetchArticles()})),e.loadMoreBtn.addEventListener("click",(function(){t.fetchArticles()}));
//# sourceMappingURL=03-load-more-btn.cf13c864.js.map
