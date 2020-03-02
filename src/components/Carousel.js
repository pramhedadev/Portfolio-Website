import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import repiceranch from "../assets/images/recipe.png";
import fsairbnb from "../assets/images/fsairbnb.jpg";
import Card from "../components/Card";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Recipe Ranch",
          subTitle: "The cook rub for chefs",
          imgSrc: repiceranch,
          link: "",
          selected: false
        },
        {
          id: 1,
          title: "Fs Air BnB",
          subTitle: "AirBnB clone ",
          imgSrc: fsairbnb,
          link: "",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
