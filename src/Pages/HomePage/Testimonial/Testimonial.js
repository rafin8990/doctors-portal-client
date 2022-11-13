import React from 'react';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import Quote from '../../../assets/icons/quote.svg'
import Person from './Person';

const Testimonial = () => {
    const persons = [
        {
            id:1,
            name:"Winson Harry",
            place : 'California',
            describe : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic:person1
        },
        {
            id:1,
            name:"Winson Potter",
            place : 'California',
            describe : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic:person2
        },
        {
            id:1,
            name:"Nick Pirog",
            place : 'California',
            describe : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic:person3
        }
    ]

    return (
        <div className='mt-36'>
            <div className='flex justify-between'>
                <div className='sm:min-w-0  '>
                    <h3 className='text-xl text-[#0FCFEC]'>Testimonial</h3>
                    <h1 className='text-2xl lg:text-4xl'>What Our Patient Says</h1>
                </div>
                <div>
                    <img src={Quote} className='w-2/3 lg:w-1/2' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    persons.map(person=><Person
                    key={person.id}
                    person={person}
                    ></Person>)
                }
            </div>
        </div>
    );
};

export default Testimonial;