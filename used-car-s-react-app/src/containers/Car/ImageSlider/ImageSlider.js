import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    
`;

const Figure = styled.figure`
    width: 10em;
    height: 3.8em;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

const MainImage = styled.img`
    width: 100%;
    overflow: hidden;
`;

const MainFigure = styled.figure`
    width: 100%;
    height: 14em;
    overflow: hidden;
    margin: 0;
    padding: 0;

    @media(min-width: 1100px) {
        height: 16em;
    }
    @media(min-width: 1300px) {
        height: 22em;
    }
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
        this.setState({ mainImageIndex: index });
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
                imgsArr.push(
                    <Figure>
                        <Img src={el} key={index} onClick={() => this.ChangeImageHandler(index)} />
                    </Figure>
                );

            });

            mainImage = <MainImage src={this.state.images[this.state.mainImageIndex]} />;
        }

        return (
            <div>
                <MainFigure>
                    {mainImage}
                </MainFigure>
                <Slider>
                    {imgsArr}

                </Slider>

            </div>

        )
    }
}

export default ImageSlider;