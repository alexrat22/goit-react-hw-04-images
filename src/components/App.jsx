import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getPictures } from '../API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const perPage = 12;

export default function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [visibleLoadMore, setVisibleLoadMore] = useState(false);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    setVisibleLoader(true);

    getPictures(imageName, page)
      .then(response => {
        const { totalHits, hits } = response;

        if (totalHits === 0) {
          toast.error('Sorry, there are no images matching your search query.');
          setVisibleLoadMore(false);
          setVisibleLoader(false);
          return;
        } else {
          setImages(prevImages =>
            page === 1 ? hits : [...prevImages, ...hits]
          );
          setVisibleLoader(false);
          setVisibleLoadMore(page * perPage < totalHits);
        }
      })
      .catch(error => {
        toast.error(error);
      });
  }, [imageName, page]);

  const onFormSubmit = inputImageName => {
    if (inputImageName !== imageName) {
      setImageName(inputImageName);
      setImages(null);
      setPage(1);
    }
  };

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <ToastContainer autoClose={2500} />
      <Searchbar onSubmit={onFormSubmit} />
      {images && <ImageGallery images={images} />}
      {visibleLoadMore && <Button onCLick={onLoadMoreClick} />}
      {visibleLoader && <Loader />}
    </div>
  );
}
