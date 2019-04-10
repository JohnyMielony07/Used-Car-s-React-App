import React, { Component } from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 10em;
    height: 7em;
    
`;

const Slider = styled.div`
    
display: flex;
justify-content: space-between;
`;

class ImageSlider extends Component {



    state = {
        images: null
    }

    componentDidMount() {
        var imgs = [];
        console.log('do stuff');
        console.log(this.props.images[1]);
        this.props.images.map(el => {
            if (el) {
                imgs.push(el);
            }
        })
        this.setState({ images: imgs })

    }

    render() {
        let imgsArr = [];
        if (this.state.images) {
            this.state.images.map(el => {
                imgsArr.push(<Img src={el} />);

            })
        }



        return (
            <div>
                Image slider
                <Slider>
                    {imgsArr}

                </Slider>

            </div>

        )
    }
}

export default ImageSlider;