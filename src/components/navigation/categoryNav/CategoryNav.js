import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  return (
    <div class="category-nav">
      <div class="category">
        <Link to='/'>Editorial</Link>
      </div>
      <div class="category">
        <Link to='/search/Wallpapers'>Wallpapers</Link>
      </div>
      <div class="category">
        <Link to='/search/Texture and patterns'>Texture & Patterns</Link>
      </div>
      <div class="category">
        <Link to='/search/Nature'>Nature</Link>
      </div>
      <div class="category">
        <Link to='/search/Current Events'>Current Events</Link>
      </div>
      <div class="category">
        <Link to='/search/Architecture'>Architecture</Link>
      </div>
      <div class="category">
        <Link to='/search/Business and work'>Business & work</Link>
      </div>
      <div class="category">
        <Link to='/search/film'>Film</Link>
      </div>
      <div class="category">
        <Link to='/search/animals'>Animals</Link>
      </div>
      <div class="category">
        <Link to='/search/travel'>Travel</Link>
      </div>
      <div class="category">
        <Link to='/search/fashion'>Fashion</Link>
      </div>
      <div class="category">
        <Link to='/search/Food and drink'>Food & Drink</Link>
      </div>
      <div class="category">
        <Link to='/search/Spirituality'>Spirituality</Link>
      </div>
    </div>
  )
}

export default CategoryNav;
