import React from 'react';
import style from './style.module.scss';
import Form from './component/Form';
import Todo from '../Todo';
import ShouldComponentUpdateExample from '../ShouldComponentUpdateExample';
import Table from '../Table/index';
import ReviewImage from 'components/Versions/ReviewImage';
import SmallImage from 'components/Versions/SmallImage';
// import logo from 'images/vk.jpeg';
import FunctionalComponent from './component/FunctionalComponent';
import Users from 'components/users';
import Input from '../Form/input/index';
import InputTargetValue from './component/InputTargetValue/index';

class Content extends React.Component {
    render() {
        return (
            <div className = {style.content}> 
            <div className = {style.HW}>
            <p>Homework</p>
            <div className = {style.flex}>
            <div className = {style.side}>
                <p>Left side</p>
            <InputTargetValue/>
            </div>
            <div className = {style.side}>
                <p>Right side</p>
                <InputTargetValue/>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Content;