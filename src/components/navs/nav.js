import React,{Component} from 'react';
import './nav.css';
import DropDown from '../dropdownbutton/dropdown'


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


class Navs extends Component {
    render() {
        return (
            <header className="all">
                {console.log(this.props)}
                <nav className="navs">
                    <div className="nav_items">
                        <ul>{menuItems.en.map((items, index) => {
                            console.log(document.body.clientWidth);
                            return (<fragment>
                                    {index < this.props.value && <li key={items.toString()}>{items}</li>}
                                </fragment>
                            );
                        })}
                        </ul>
                    </div>


                </nav>
            </header>
        );
    }
}

export default Navs;