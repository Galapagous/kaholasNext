import React from "react"
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid"
import { HeartIcon, ShareIcon } from "@heroicons/react/outline"
import { useState } from "react"

export const Body = () => {
  const [rating, setRating] = useState(null)
  const [ratingSecond, setRatingSecond] = useState(null)
  return (
    <div className="w-5/6 m-auto mt-3 flex-row sm:p-5 p-3 sm:flex sm:mt-14">
      <div className="w-full sm:w-1/2">
        <p className="text-xs sm:text-sm">In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate painting using crayon and watercolor. Student will have fun learning about the artists & creating their own art inspired by their work.</p>
        <div className="flex items-center mt-2 mb-3">
          <img className="rounded-full sm:object-cover w-14 h-14 sm:rounded-full sm:w-24 sm:h-24 sm:object-cover" src="./musa.jpg" alt="rounded image" />
          <h3 className="ml-4 text-sm sm:text-xl text-blue font-medium text-purple-900">Kimberly R Moseler</h3>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1
            return (
              <label>
                <input
                  className="hidden"
                  type="checkbox"
                  value={ratingValue}
                  onClick={() => {
                    setRating(ratingValue)
                  }}
                />
                <StarIcon className="h-4 w-4 sm:w-8 sm:h-8" color={ratingValue >= rating ? "grey" : "yellow"} />
              </label>
            )
          })}
          <p className="ml-5 sm:text-lg text-sm">417 total for this teacher</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((star, i) => {
            const ratingValueSecond = i + 1
            return (
              <label>
                <input
                  className="hidden"
                  type="checkbox"
                  value={ratingValueSecond}
                  onClick={() => {
                    setRatingSecond(ratingValueSecond)
                  }}
                />
                <StarIcon className="h-4 w-4 sm:w-8 sm:h-8" color={ratingValueSecond >= ratingSecond ? "grey" : "yellow"} />
              </label>
            )
          })}
          <p className="ml-5 sm:text-lg text-sm">4 reviews for this class</p>
        </div>
        <h1 className="sm:text-lg text-sm font-medium mt-5">Completed by 21 learners</h1>
        <div className="flex items-center mt-5">
          <div className="flex cursor-pointer sm:mr-10 mr-5 items-center font-medium bg-purple-900 sm:w-64 sm:h-14 w-40 h-10 text-white p-2 rounded-3xl">
            <h1 className="text-center font-normal sm:text-lg text-xs w-full">See Class Schedule</h1>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
          <div className="flex flex-row-reverse sm:mr-10 mr-5 items-center">
            <h1 className="text-purple-900 text-xl ml-1 font-bold">Save</h1>
            <HeartIcon className="sm:w-8 sm:h-8 w-4 h-4 cursor-pointer text-purple-900" />
          </div>
          <div className="flex flex-row-reverse items-center">
            <h1 className="text-purple-900 text-xl ml-1 font-bold">Share</h1>
            <ShareIcon className="sm:w-8 sm:h-8 w-4 h-4 cursor-pointer text-purple-900" />
          </div>
        </div>
      </div>
      <div className="w-full mt-10 flex sm:w-1/2 sm:mt-0">
        <img className="w-1/2 h-60 sm:h-96 mr-1" src="./musa.jpg" alt="musa Image" />
        <img className="w-1/2 h-60 sm:h-96" src="./fish.jpg" alt="fish Image" />
      </div>
    </div>
  )
}
