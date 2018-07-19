function Gallery(sSelector, picturesQuantity){
	var g = this;
	g.galleryWrapper = document.querySelector(sSelector);
	g.picturesQuantity = picturesQuantity;
	g.galleryPictures = g.galleryWrapper.querySelectorAll('.image-list__item');
	g.galleryPicturesOnPage = g.galleryPictures.length;
	g.paginationBtnsQuantity = Math.ceil(g.picturesQuantity/g.galleryPicturesOnPage)
	g.galleryPagination = g.galleryWrapper.querySelector('.gallery__pagination');
	
	if(g.paginationBtnsQuantity > 1){
		for(var i = 0; i < g.paginationBtnsQuantity; i++){
			g.paginationBtn = document.createElement('span');
			g.paginationBtn.innerHTML = i+1;
			g.paginationBtn.className = 'pagination__btn';
			g.galleryPagination.appendChild(g.paginationBtn);
		}
	}

	g.paginationBtns = g.galleryWrapper.querySelectorAll('.pagination__btn');
	g.paginationBtns[0].classList.add('pagination__btn--active');

	g.changePage = function(){
		for(var i = 0; i < g.galleryPicturesOnPage; i++){
			g.galleryPictures[i].src = g.galleryPictures[i].src.split('/')[-1] = 'images/gallery/' + ((this.innerHTML-1)*8 + 1 + i) + '.jpg'; 
		}
		if(this.innerHTML == g.paginationBtnsQuantity){
			for(var i = g.picturesQuantity%g.galleryPicturesOnPage; i < g.galleryPictures.length; i++){
				g.galleryPictures[i].style.visibility = 'hidden';
			}
		} else {
			for(var i = g.picturesQuantity%g.galleryPicturesOnPage; i < g.galleryPictures.length; i++){
				g.galleryPictures[i].style.visibility = 'visible'
			}
		}
		
		for(var i = 0; i < g.paginationBtnsQuantity; i++){
			g.paginationBtns[i].classList.remove('pagination__btn--active');
		}
		this.classList.add('pagination__btn--active');
	}

	for(var i = 0; i < g.paginationBtnsQuantity; i++){
		g.paginationBtns[i].addEventListener('click', g.changePage);
	}
}
