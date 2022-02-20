import React from 'react'
import styles from './FoodCardsContainer.module.css'
import { FoodCard } from '../FoodCard/FoodCard'

export const FoodCardsContainer = () => {
  return (
    <div className={styles.foodCardsContainer}>
        {/* <h3 className={styles.heading}>123</h3> */}
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
    </div>
  )
}

