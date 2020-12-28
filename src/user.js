import React from 'react';

const Description = React.createElement('div', {}, {children: [Name, Tag, Location]} );

const Photo = React.createElement('img', 
  {
    src       :"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
    alt       :"Аватар пользователя",
    className :"avatar",
  }
)

const Name     = React.createElement('p', {className : "name"}, 'Petra Marica')
const Tag      = React.createElement('p', {className : "tag"}, '@pmarica')
const Location = React.createElement('p', {className : "location"}, 'Salvador, Brasil')
const Stats    = React.createElement('p', {className : "stats"}, 'Інформація про активність із json')

console.log (Description);

{/* <div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */}
