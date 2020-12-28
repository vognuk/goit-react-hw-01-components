import React from 'react';
import Profile from './Profile';
import user from '../data/user';

export default function App(){
    const { followers, views, likes } = user.stats;
    return (
      <>
        <Profile 
            name      = {user.name} 
            avatar    = {user.avatar} 
            tag       = {user.tag}  
            location  = {user.location} 
            followers = {followers}
            views     = {views}
            likes     = {likes}
        />
      </>
    );
  }
