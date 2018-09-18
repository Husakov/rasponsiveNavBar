import React,{Component} from 'react';
import './nav.css';
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



    changeLanguage=(a)=>{

        if(a=='2')
            this.state.menuItems=menuItems.en;
        if(a=='1')
            this.state.menuItems=menuItems.hr;

    }
    functionForToogle=()=>{
        this.setState({
            dropdownsOpen: !this.state.dropdownsOpen,
        });
        if(this.state.selectedLanguage=='1')
        this.setState({
            menuItems:menuItems.en
        });
        if(this.state.selectedLanguage=='2')
            this.setState({
                menuItems:menuItems.hr
            });


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
                                    {index < this.props.value && <li key={items.toString()}><a href="/"><b>{items}</b></a></li>}
                                </fragment>
                            );
                        })}
                            {this.props.value<8 && <li><a>
                             <Dropdown

                            key={3}
                            isOpen={this.state.dropdownsOpen}
                            toggle={() => this.functionForToogle()}>
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
                            </a>
                        </li>
                            }
                            <li><a>
                                <Input type="select" value={selectedLanguage}  onChange={e => this.setState({selectedLanguage: e.target.value})}>
                                    <optgroup label="Choose language">
                                        <option value="1" onClick={this.changeLanguage(selectedLanguage)}>English</option>
                                        <option value="2" onClick={this.changeLanguage(selectedLanguage)}>Hrvatski</option>
                                    </optgroup>
                                </Input>
                            </a>
                            </li>
                        </ul>
                    </div>


                </nav>
            </header>
        );
    }
}

export default Navs;