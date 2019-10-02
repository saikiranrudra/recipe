import React from 'react';

class CardData extends React.Component {
    render() {
        if(this.props.isIngrident) {    
            const ingrident = this.props.data.ingredientLines.map(el => {
                return (
                    <div className="nutritionValue">
                        <span className="nutrition__key">{el}</span>
                    </div>
                );
            })
            return ingrident;
        } 
        
        const nutrients = Object.keys(this.props.data.totalNutrients).map(keys => {        
            return (
                <div className="nutritionValue">
                    <span className="nutrition__key">{this.props.data.totalNutrients[keys].label + ': '}</span>
                    <span className="nutrition__value">{`${Math.round(this.props.data.totalNutrients[keys].quantity)}${this.props.data.totalNutrients[keys].unit}`}</span>
                </div>
            );
        });
        return nutrients;
    }

}

export default CardData;    