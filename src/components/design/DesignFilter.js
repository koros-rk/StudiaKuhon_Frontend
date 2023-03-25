import React from 'react';
import $ from "jquery";

class DesignFilter extends React.Component {
    componentDidMount() {
        $(".btn-sorting").click(function(){
            $(".design-sorting").toggleClass('design-show')
        });
        $(".btn-sorting").click(function(){
            $(".btn-sorting").toggleClass('btn-active')
        });
        $(".custom-checkbox-label-1").click(function(){
            $(".custom-checkbox-label-1").toggleClass('custom-active-1')
        });
        $(".custom-checkbox-label-2").click(function(){
            $(".custom-checkbox-label-2").toggleClass('custom-active-2')
        });
        $(".custom-checkbox-label-3").click(function(){
            $(".custom-checkbox-label-3").toggleClass('custom-active-3')
        });
        $(".custom-checkbox-label-4").click(function(){
            $(".custom-checkbox-label-4").toggleClass('custom-active-4')
        });
        $(".custom-checkbox-label-5").click(function(){
            $(".custom-checkbox-label-5").toggleClass('custom-active-5')
        });
        $(".custom-checkbox-label-6").click(function(){
            $(".custom-checkbox-label-6").toggleClass('custom-active-6')
        });
        $(".custom-checkbox-label-7").click(function(){
            $(".custom-checkbox-label-7").toggleClass('custom-active-7')
        });
        $(".custom-checkbox-label-8").click(function(){
            $(".custom-checkbox-label-8").toggleClass('custom-active-8')
        });
        $(".custom-checkbox-label-9").click(function(){
            $(".custom-checkbox-label-9").toggleClass('custom-active-9')
        });
        $(".custom-checkbox-label-10").click(function(){
            $(".custom-checkbox-label-10").toggleClass('custom-active-10')
        });
        $(".custom-checkbox-label-11").click(function(){
            $(".custom-checkbox-label-11").toggleClass('custom-active-11')
        });
        $(".custom-checkbox-label-12").click(function(){
            $(".custom-checkbox-label-12").toggleClass('custom-active-12')
        });
        $(".custom-checkbox-label-13").click(function(){
            $(".custom-checkbox-label-13").toggleClass('custom-active-13')
        });
        $(".custom-checkbox-label-14").click(function(){
            $(".custom-checkbox-label-14").toggleClass('custom-active-14')
        });
        $(".custom-checkbox-label-15").click(function(){
            $(".custom-checkbox-label-15").toggleClass('custom-active-15')
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            styles: [],
            colors: [],
            materials: [],
            handles: []
        };
        this.styleHandler = this.styleHandler.bind(this)
        this.colorHandler = this.colorHandler.bind(this)
        this.materialHandler = this.materialHandler.bind(this)
        this.handleHandler = this.handleHandler.bind(this)
    }

    handleStateChange = () => {
        let url = "&"

        Object.entries(this.state).forEach(
            ([key, value]) => {
                url += key+"="
                for (const item of value) {
                    url += item+","
                }
                url += '&'
            }
        )

        this.props.onFilterChange(url)
    }

    async styleHandler(e) {
        const name = e.target.name

        await this.setState((prevState) => ({
            styles: prevState.styles.includes(name)
                ? prevState.styles.filter((item) => item !== name)
                : [...prevState.styles, name]
        }), this.handleStateChange);
    }

    async colorHandler(e) {
        const name = e.target.name

        await this.setState((prevState) => ({
            colors: prevState.colors.includes(name)
                ? prevState.colors.filter((item) => item !== name)
                : [...prevState.colors, name]
        }), this.handleStateChange);
    }

    async materialHandler(e) {
        const name = e.target.name

        await this.setState((prevState) => ({
            materials: prevState.materials.includes(name)
                ? prevState.materials.filter((item) => item !== name)
                : [...prevState.materials, name]
        }), this.handleStateChange);
    }

    async handleHandler(e) {
        const name = e.target.name

        await this.setState((prevState) => ({
            handles: prevState.handles.includes(name)
                ? prevState.handles.filter((item) => item !== name)
                : [...prevState.handles, name]
        }), this.handleStateChange);
    }

    render() {

        return (
            <div className="ready-design__container">
                <div className="ready-design__choice">
                    <h1 className="ready-design__title main-title">Готові дизайни</h1>

                    <div className="btns-sorting">
                        <button className="btn-sorting">Стилі</button>
                        <button className="btn-sorting">Кольорова гама</button>
                        <button className="btn-sorting">Матеріал фасадів</button>
                        <button className="btn-sorting">Тип ручок</button>
                    </div>

                    <div className="design-sorting">

                        <ul className="show-sorting">
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="loft" name="Loft" value="1" onClick={this.styleHandler}/>
                                <label htmlFor="loft" className="style-label custom-checkbox-label-1">Loft</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="bachelor" name="Bachelor"
                                       value="2" onClick={this.styleHandler}/>
                                <label htmlFor="bachelor"
                                       className="style-label custom-checkbox-label-2">Bachelor</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="provence" name="Provence"
                                       value="3" onClick={this.styleHandler}/>
                                <label htmlFor="provence"
                                       className="style-label custom-checkbox-label-3">Provence</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="scandinavian" name="Scandinavian"
                                       value="4" onClick={this.styleHandler}/>
                                <label htmlFor="scandinavian"
                                       className="style-label custom-checkbox-label-4">Scandinavian</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="modern" name="Modern" value="5" onClick={this.styleHandler}/>
                                <label htmlFor="modern" className="style-label custom-checkbox-label-5">Modern</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="hi-tech" name="Hi-Tech"
                                       value="6" onClick={this.styleHandler}/>
                                <label htmlFor="hi-tech" className="style-label custom-checkbox-label-6">Hi-Tech</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="Mediterranian"
                                       name="Mediterranian" value="7" onClick={this.styleHandler}/>
                                <label htmlFor="mediterranian"
                                       className="style-label custom-checkbox-label-7">Mediterranian</label>
                            </li>
                        </ul>

                        <ul className="show-sorting">
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="dark" name="Темна" value="8" onClick={this.colorHandler}/>
                                <label htmlFor="dark" className="style-label custom-checkbox-label-8">Темна</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="light" name="Світла" value="9" onClick={this.colorHandler}/>
                                <label htmlFor="light" className="style-label custom-checkbox-label-9">Світла</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="colored" name="Кольорова"
                                       value="10" onClick={this.colorHandler}/>
                                <label htmlFor="colored"
                                       className="style-label custom-checkbox-label-10">Кольорова</label>
                            </li>
                        </ul>

                        <ul className="show-sorting">
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="painted" name="Крашені"
                                       value="11" onClick={this.materialHandler}/>
                                <label htmlFor="painted"
                                       className="style-label custom-checkbox-label-11">Крашені</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="film" name="Пльоночні" value="12" onClick={this.materialHandler}/>
                                <label htmlFor="film" className="style-label custom-checkbox-label-12">Пльоночні</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="wooden" name="Дерев’яні"
                                       value="13" onClick={this.materialHandler}/>
                                <label htmlFor="wooden"
                                       className="style-label custom-checkbox-label-13">Дерев’яні</label>
                            </li>
                        </ul>

                        <ul className="show-sorting">
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="standard" name="Стандартні"
                                       value="14" onClick={this.handleHandler}/>
                                <label htmlFor="standard"
                                       className="style-label custom-checkbox-label-14">Стандартні</label>
                            </li>
                            <li className="show-sorting__item">
                                <input type="checkbox" className="custom-checkbox" id="integrated" name="Інтегровані"
                                       value="15" onClick={this.handleHandler}/>
                                <label htmlFor="integrated"
                                       className="style-label custom-checkbox-label-15">Інтегровані</label>
                            </li>
                        </ul>

                    </div>

                    <div className="option__bg basket__bg"></div>

                </div>
            </div>
        )
    }
}

export default DesignFilter