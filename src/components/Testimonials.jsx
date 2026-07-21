import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import { Star } from 'lucide-react'
import StarRating from './StarRating'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
      <Title
        title="What Our Guests Say"
        subtitle="Discover why travelers choose us for exceptional comfort, outstanding service, and unforgettable stays. Read genuine reviews from guests who have experienced our hospitality."
        align=""
      />

      <div className="flex flex-col md:flex-row gap-5 mt-20 items-stretch justify-center w-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow w-full md:max-w-xs"
          >
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt=""
                className="rounded-full h-20 w-20 object-cover flex-shrink-0"
              />

              <div className="font-playfair text-xl">
                <p className="font-playfair text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              <StarRating />
            </div>

            <p className="text-gray-500 mt-4 leading-7">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials