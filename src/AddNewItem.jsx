import React from "react";
import { Form } from "react-bootstrap";
import "./AddNewItem.css";
import { ReactComponent as CloseSvg } from "./svgs/close.svg";

const AddNewItem = () => {
  return (
    <>
      <div className="add-item-container">
        <CloseSvg className="close-svg" />
        <h1>Add new item </h1>
        <span className="item-type-subtitle">
          What kind of item do you like to add?
        </span>
        <div className="add-item-checkbox-item">
          <Form.Check
            inline
            type="radio"
            name="item"
            label="Service"
            id="services"
          />
          <Form.Check
            inline
            type="radio"
            name="item"
            label="Product"
            id="products"
          />
        </div>
        <Form.Label for="txt" className="add-item-txt-label">
          Name *
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Eg. Business Consulting"
          className="input-text"
          id="txt"
          required
        />
        <Form.Label for="describtion" className="add-item-txt-label ">
          Discreption
        </Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          type="text"
          placeholder="Describe your product"
          className="input-text"
          id="describtion"
          required
        />
        <Form.Label for="price" className="add-item-txt-label">
          Price *
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter amount"
          className="input-text"
          id="price"
        />
        <div className="buttons">
          <button className="button light">Cancel</button>
          <button className="button dark">Add Item</button>
        </div>
      </div>
    </>
  );
};

export default AddNewItem;
