import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Parent.css"
import Child1Form from "./Child1-Form"
import Child2UL from "./Child2-ul"

class Parent extends Component {
    state = {
        groceryList: [
            {
                id: uuidv4(),
                item: "milk",
                isDone: false,
            },
            {
                id: uuidv4(),
                item: "cheese",
                isDone: false,
            },
        ],
        inputItem: "",
    };

    handleSubmitItem = (event) => {
        event.preventDefault();

        let newItemArray = [
            ...this.state.groceryList,
            { id: uuidv4(), item: this.state.inputItem, isDone: false },
        ];

        this.setState({
            groceryList: newItemArray,
            inputItem: "",
        });
    };

    handleOnChange = (event) => {
        this.setState({
            inputItem: event.target.value,
        });
    };

    handleDeleteById = (id) => {
        let filteredGroceryListArray = this.state.groceryList.filter(
            (item) => item.id !== id
        );

        this.setState({
            groceryList: filteredGroceryListArray,
        });
    };

    render() {
        return (
            <div className="parent-container">
                <Child1Form
                handleSubmitItem={this.handleSubmitItem}
                handleOnChange={this.handleOnChange}
                inputItem={this.state.inputItem}
                />
                <Child2UL
                groceryList={this.state.groceryList}
                handleDeleteById={this.handleDeleteById}
                handleIsDone={this.handleIsDone}
                />
            </div>
        );
    }
}

export default Parent;
