import React from 'react';
import Card from './Card';

function Test(props) {
    return (
        <div className='container'>
            <div className='row'>
                {
                    data.map((v, i) => {
                        return (
                            <div className='col-md-4'>
                                <Card
                                    id={v.id}
                                    img={v.url}
                                    title={v.name}
                                    subtitle={v.price}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Test;