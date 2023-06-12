import React, { useState, useEffect } from "react";
import { addProductReview, getProductReviews } from "../../firebase"; // Импорт функций Firebase

const ProductReviewForm = ({ productId }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductReview(productId, review, rating); // Добавление отзыва через функцию Firebase
    setReview("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={handleReviewChange}
        placeholder="Напишите отзыв"
      ></textarea>
      <select value={rating} onChange={handleRatingChange}>
        <option value={0}>Выберите рейтинг</option>
        <option value={1}>1 звезда</option>
        <option value={2}>2 звезды</option>
        <option value={3}>3 звезды</option>
        <option value={4}>4 звезды</option>
        <option value={5}>5 звезд</option>
      </select>
      <button type="submit">Добавить отзыв</button>
    </form>
  );
};

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getProductReviews(productId); // Получение отзывов через функцию Firebase
      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, [productId]);

  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.length === 0 && <p>Пока нет отзывов</p>}
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.review}</p> {/* Изменено поле text на review */}
          <p>Рейтинг: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

const ProductPage = ({ productId }) => {
  return (
    <div>
      <h2>Страница продукта</h2>
      <ProductReviews productId={productId} />
      <ProductReviewForm productId={productId} />
    </div>
  );
};

export default ProductPage;
