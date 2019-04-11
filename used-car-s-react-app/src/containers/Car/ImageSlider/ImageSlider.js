import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 10em;
    height: 7em;
    
`;

const MainImage = styled.img`
    width: 20em;
    
`;

const Slider = styled.div`
    
display: flex;
justify-content: space-between;
`;


class ImageSlider extends Component {

    state = {
        images: null,
        mainImageIndex: 0
    }

    ChangeImageHandler = (index) => {
        this.setState({mainImageIndex: index});
    };

    componentDidMount() {
        var imgs = [];
        this.props.images.map(el => {
            if (el) {
                imgs.push(el);
            }
        })
        this.setState({ images: imgs })

    }

    render() {
        let imgsArr = [];
        let mainImage = null;


        if (this.state.images) {
            console.log('przeladowuje');
            this.state.images.map((el, index) => {
                imgsArr.push(<Img src={el} key={index} onClick={() => this.ChangeImageHandler(index)} />);

            });

            mainImage = <MainImage src={this.state.images[this.state.mainImageIndex]} />;
        }

        return (
            <div>
                Image slider
                {mainImage}
                <Slider>
                    {imgsArr}                    

                </Slider>

            </div>

        )
    }
}

export default ImageSlider;