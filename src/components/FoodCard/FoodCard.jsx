    import React from 'react'
    import styles from './FoodCard.module.css' 
    import patterns from './Patterns.module.css' 
    import cn from 'classnames'

    export const FoodCard = () => {
      return (
        <div className={styles.foodCard}>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvK2tzTsJUBBSYBMcIidQi0iGnWG0VORcmw&usqp=CAU" alt="food" className={styles.foodImg} />
            <div className={cn(styles.nameContainer, {[patterns.pattern9]: true})}>
            <h2 className={styles.foodName}>Arrabiata</h2>
            </div>
        </div>
      )
    }
    