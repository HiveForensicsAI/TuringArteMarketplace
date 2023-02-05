import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { Button } from '.';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://us21.api.mailchimp.com/3.0/lists/ce93844ad0/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'apikey 6754ef8ab2087f8c51f151e3b7921ace-us21',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log('Success! You are now subscribed.');
      } else {
        console.log(data.detail);
      }
    } catch (error) {
      console.log('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md ">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Your Email"
        className="h-fill flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none "
      />
      <div className="flex-initial">
        <Button
          btnName="Email me"
          classStyles="rounded-md"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Subscribe;
