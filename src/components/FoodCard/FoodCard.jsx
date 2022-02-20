    import React from 'react'
    import styles from './FoodCard.module.css' 
    
    export const FoodCard = () => {
      return (
        <div className={styles.foodCard}>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvK2tzTsJUBBSYBMcIidQi0iGnWG0VORcmw&usqp=CAU" alt="food" className={styles.foodImg} />
            <div className={styles.nameContainer}>
            <h2 className={styles.foodName}>Tuna Pasta al</h2>
            </div>
        </div>
      )
    }
    