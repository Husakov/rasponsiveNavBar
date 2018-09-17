import React from 'react';

const menuItems = {
    hr: [
        "Ljepota i Vi",
        "Kuhanje na zdrav način",
        "Kampiranje na otvorenom",
        "Aktivirajte se",
        "Meditacija",
        "2 + 2 = 3",
        "Za filmofile i knjigoljupce",
        "Jučer danas sutra"
    ],
    en: [
        "Beauty and You",
        "Healthy Cooking",
        "Outdoor Camping",
        "Activate",
        "Meditation",
        "2 + 2 = 3",
        "Cinephiles' and Booklovers' Corner",
        "Yesterday Today Tomorrow"
    ]
};

const Navs= props =>(
  <header className="nav">
      <nav>
      <div></div>
          <div className="nav_items">
            <ul>{menuItems.en.map((items,index)=>{
            console.log(items);
                return(
                     <li>{items}</li>
                         );
                        })}

            </ul>
          </div>

      </nav>
  </header>
);

export default Navs;