import React from 'react'
import styles from './FoodCardsContainer.module.css'
import { FoodCard } from '../FoodCard/FoodCard'

export const FoodCardsContainer = () => {
  return (
    <div className={styles.foodCardsContainer}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
    </div>
  )
}

