import React from 'react'
import styles from './FoodCard.module.css'
import cn from 'classnames'
import getPattern from './getPattern'

export const FoodCard = () => {
  return (
    <div className={styles.foodCard}>
      <img
      // src="foodImg.jpg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvK2tzTsJUBBSYBMcIidQi0iGnWG0VORcmw&usqp=CAU"
        alt="food"
        className={styles.foodImg}
      />
      <div className={cn(styles.nameContainer, getPattern())}>
        <p className={styles.author}>by JekaJSX</p>
        <h2 className={styles.foodName}>Arrabiata</h2>
      </div>
    </div>
  )
}
