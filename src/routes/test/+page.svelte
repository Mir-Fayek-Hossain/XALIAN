<script>
import moment from 'moment';

import jwt_decode from "jwt-decode"
	import { ENV } from '$src/environment';
	import { authApiService } from '$src/data/api/auth.apiService';
	import { categoryApiService } from '$src/data/api/category.apiService';
    let time=moment()
    let b=JSON.stringify(jwt_decode('eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4NDdmOWIxLWVlNzEtNDFhOS1iYWE0LTA4YWIzYjFiYTQxMiIsIm5hbWUiOiJTLlUxMjMgU2Vwb25uIiwiZmlyc3ROYW1lIjoiUy5VMTIzIiwibGFzdE5hbWUiOiJTZXBvbm4iLCJmdWxsTmFtZSI6IlMuVTEyMyBTZXBvbm4iLCJhdmF0YXIiOiJodHRwczovL2ltYWdlZGVsaXZlcnkubmV0L3VQRlpHZnRzVGt3T2ZjeV9XcGRLLVEvMGMyYjVlZTItZTkxMC00ZGQyLWEzNWItOTlkODU2Njg3OTAwL3B1YmxpYyIsInBob25lTnVtYmVyIjoiMDE5NzM3NTM4NTQiLCJlbWFpbCI6InNlcG9uLmxvb29veEBnbWFpbC5jb20iLCJ1c2VyVHlwZXMiOlsiQ3VzdG9tZXIiXSwicm9sZXMiOltdLCJpYXQiOjE2NjQzMzUzODYsImV4cCI6MTY2NDQyMTc4Nn0.cZ-WCmp0ax5ZXfq7uvRYr7zxNOJl6nIewG_GPAz14tRQRxJPJzZaMfA6WJDeKMx3TOYNVwqkEhhhWGvSNAvm0A'))
  
    async function getOtp(){
        console.log((await categoryApiService.category()))
    }
</script>
<button on:click={getOtp}>get</button>
{time}
{b}
{
    ENV.CORE_ENDPOINT
}
<div class="cards">
    <div class="product-card">
      <div class="product-image" style="background-image: url(https://static.wixstatic.com/media/2f4239_84773d98346d482093c2ae990fd2814a~mv2.gif/v1/fit/w_260,h_260,q_90/2f4239_84773d98346d482093c2ae990fd2814a~mv2.gif)"></div>
      <div class="product-body">
        <div class="options">
          <div class="option">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="option"><i class="fa-solid fa-eye"></i></div>
        </div>
        <button class="product-card-button"><i class="fa-solid fa-bag-shopping"></i> Add to bag</button>
        <div class="product-details">
          <p class="product-title">Polo Tee</p>
          <div class="product-price-tag">
            <div class="dot"></div>
            <p>$599</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product-card">
      <div class="product-image" style="background-image: url(https://static.wixstatic.com/media/57ab3a_39ade743bfb24ba7a70d067cae01a6a6~mv2.gif/v1/fill/w_320,h_320,q_90/57ab3a_39ade743bfb24ba7a70d067cae01a6a6~mv2.gif)"></div>
      <div class="product-body">
        <div class="options">
          <div class="option">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="option"><i class="fa-solid fa-eye"></i></div>
        </div>
        <button class="product-card-button"><i class="fa-solid fa-bag-shopping"></i> Add to bag</button>
        <div class="product-details">
          <p class="product-title">Face mask</p>
          <div class="product-price-tag">
            <div class="dot"></div>
            <p>$599</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product-card">
      <div class="product-image" style="background-image: url(https://static.wixstatic.com/media/f355ca_c136b67b1f054edaacfa8315d636016c~mv2.gif)"></div>
      <div class="product-body">
        <div class="options">
          <div class="option">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="option"><i class="fa-solid fa-eye"></i></div>
        </div>
        <button class="product-card-button"><i class="fa-solid fa-bag-shopping"></i> Add to bag</button>
        <div class="product-details">
          <p class="product-title">Pillow</p>
          <div class="product-price-tag">
            <div class="dot"></div>
            <p>$599</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product-card">
      <div class="product-image" style="background-image: url(https://static.wixstatic.com/media/f355ca_ef52ff11e61b47259cebb9182565c22d~mv2.gif)"></div>
      <div class="product-body">
        <div class="options">
          <div class="option">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="option"><i class="fa-solid fa-eye"></i></div>
        </div>
        <button class="product-card-button"><i class="fa-solid fa-bag-shopping"></i> Add to bag</button>
        <div class="product-details">
          <p class="product-title">Polo Tee</p>
          <div class="product-price-tag">
            <div class="dot"></div>
            <p>$599</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product-card">
      <div class="product-image" style="background-image: url(https://static.wixstatic.com/media/f355ca_108d120652df4e85a37d54cc8124c26a~mv2.gif)"></div>
      <div class="product-body">
        <div class="options">
          <div class="option">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="option"><i class="fa-solid fa-eye"></i></div>
        </div>
        <button class="product-card-button"><i class="fa-solid fa-bag-shopping"></i> Add to bag</button>
        <div class="product-details">
          <p class="product-title">Coffee Cup</p>
          <div class="product-price-tag">
            <div class="dot"></div>
            <p>$599</p>
          </div>
        </div>
      </div>
    </div>   
    <div class="product-card">
      <div class="product-image" style="background-image: url(https://static.wixstatic.com/media/2f4239_84773d98346d482093c2ae990fd2814a~mv2.gif/v1/fit/w_260,h_260,q_90/2f4239_84773d98346d482093c2ae990fd2814a~mv2.gif)"></div>
      <div class="product-body">
        <div class="options">
          <div class="option">
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="option"><i class="fa-solid fa-eye"></i></div>
        </div>
        <button class="product-card-button"><i class="fa-solid fa-bag-shopping"></i> Add to bag</button>
        <div class="product-details">
          <p class="product-title">Polo Tee</p>
          <div class="product-price-tag">
            <div class="dot"></div>
            <p>$599</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <style>
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto Condensed", sans-serif;
  transition: 0.5s ease-in-out;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(168, 35, 35);
}

.product-card {
  border: 1px solid black;
  position: relative;
  display: grid;
  place-content: center;
  height: 33vw;
  width: 30vw;
  transition-property: width;
  transition-duration: 0s;
}

.product-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}

.product-card:hover .product-image {
  filter: blur(2px);
  filter: brightness(80%);
}

.product-body {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  position: absolute;
}

.product-details {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 100%;
}

.product-price-tag {
  color: white;
  display: flex;
  align-items: center;
  background-color: tomato;
  padding: 2px 5px;
  border-radius: 10px 0 0 10px;
}

.product-price-tag .dot {
  height: 5px;
  width: 5px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: white;
}

.product-card-button {
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  opacity: 0;
  background-color: white;
}

/* .product-card-button:hover {
    background-color: transparent;
   background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 0, 0, 0)); 
  
  
} */

.product-card:hover .product-card-button {
  opacity: 1;
}

.product-card .options {
  position: absolute;
  top: 10px;
  left: 10px;
  opacity: 0;
  display: flex;
}

.product-card:hover .options {
  opacity: 1;
}

.product-card .options .option {
  margin-right: 5px;
  background-color: white;
  border-radius: 50%;
  padding: 3px;
  font-size: 10px;
  display: grid;
  place-content: center;
  width: 20px;
  height: 20px;
  box-shadow: 3px -1px 35px -4px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 3px -1px 35px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px -1px 35px -4px rgba(0, 0, 0, 1);
  cursor: pointer;
}

.product-card .options .option:hover {
  color: gray;
}

@media only screen and (max-width: 600px) {
  .product-card {
    width: 50vw;
    height: 50vw;
  }
}

@media only screen and (max-width: 275px) {
  .product-card {
    width: 100vw;
    height: 300px;
  }
}
  </style>