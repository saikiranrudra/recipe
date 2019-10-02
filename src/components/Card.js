import React from 'react';
import CardData from './CardData';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.card = React.createRef();
        this.state = { ingredient: false};
      }
    
      toggleCard = () => {
        if (this.card.current.className === "cont_modal") {
          this.card.current.className = "cont_modal cont_modal_active";
        } else {
          this.card.current.className = "cont_modal";
        }
      };
    
      nutritionShow = () => {
        this.nutrition.className = "cont_tabs--active";
        this.ingredient.className = "";
        this.setState({ ingredient: false});
      };
    
      ingridentShow = () => {
        this.nutrition.className = "";
        this.ingredient.className = "cont_tabs--active";
        this.setState({ ingredient: true });
      };
    
      render() {
        return (
              <div className="cont_modal" ref={this.card}>
                <div className="cont_photo">
                  <div className="cont_img_back">
                    <img
                      src={this.props.data.image} 
                      alt={this.props.data.label}
                    />
                  </div>
    
                  <div className="cont_mins">
                    <div className="sub_mins">
                      <h3>{Math.round(this.props.data.calories)}</h3>
                      <span>calories</span>
                    </div>
                  </div>
    
                  <div className="cont_servings cont_servings__alert">
                    <h3>{this.props.data.cautions[0]}</h3>
                  </div>
    
                  <div className="cont_servings">
                    <h3>{this.props.data.dietLabels[0]}</h3>
                  </div>
    
                  <div className="cont_detalles">
                    <h3>{this.props.data.label}</h3>
                    <p>{this.props.data.source}</p>
                  </div>
                </div>
                <div className="cont_text_ingredients">
                  <div className="cont_over_hidden">
                    <div className="cont_tabs">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className=""
                            ref={el => (this.ingredient = el)}
                            onClick={this.ingridentShow}
                          >
                            <h4>INGREDIENTS</h4>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="cont_tabs--active"
                            ref={el => (this.nutrition = el)}
                            onClick={this.nutritionShow}
                          >
                            <h4>NUTRITION</h4>
                          </a>
                        </li>
                      </ul>
                    </div>
    
                 <div className="cont_text_det_preparation" />
                  <CardData 
                    isIngrident={this.state.ingredient}
                    data={this.props.data} 
                />
                  </div>
                  <div className="cont_btn_open_dets">
                    <a onClick={this.toggleCard}>
                      <i className="material-icons">&#xE314;</i>
                    </a>
                  </div>
                </div>
              </div>
        );
      }
    
}

export default Card;