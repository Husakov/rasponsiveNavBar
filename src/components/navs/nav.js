import React,{Component} from 'react';
import './nav.css';
import DropDown from '../dropdownbutton/dropdown'
import {
    Input,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from 'reactstrap';


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
    state={
      dropdownsOpen:false,
        selectedLanguage: '1',
        menuItems:menuItems.en,
    }
    changeLanguage=()=>{

        if(this.state.selectedLanguage='2')
            this.state.menuItems=menuItems.hr;

}

    render() {
        const selectedLanguage=this.state.selectedLanguage;
        return (
            <header className="all">
                <nav className="navs">
                    <div className="nav_items">
                        <ul>{this.state.menuItems.map((items, index) => {
                            console.log(document.body.clientWidth);
                            return (<fragment>
                                    {index < this.props.value && <li key={items.toString()}>{items}</li>}
                                </fragment>
                            );
                        })}
                            {this.props.value<8 && <li>
                             <Dropdown

                            key={3}
                            isOpen={this.state.dropdownsOpen}
                            toggle={() => this.setState({
                                dropdownsOpen: !this.state.dropdownsOpen
                            })}>
                            <DropdownToggle >
                                ...
                            </DropdownToggle>
                            <DropdownMenu>{this.state.menuItems.map((items,index)=>{
                               return(<fragment>{index>this.props.value-1 &&
                                       <DropdownItem>
                                           {items}
                                       </DropdownItem>
                                   }</fragment>
                               );})}
                            </DropdownMenu>
                        </Dropdown>

                        </li>
                            }
                            <li>
                                <Input type="select" value={selectedLanguage}  onChange={e => this.setState({selectedLanguage: e.target.value})}>
                                    <optgroup label="Choose language">
                                        <option value="1" onClick={this.changeLanguage()}>English</option>
                                        <option value="2" onClick={this.changeLanguage()}>Hrvatski</option>
                                    </optgroup>
                                </Input>
                            </li>
                        </ul>
                    </div>


                </nav>
            </header>
        );
    }
}

export default Navs;