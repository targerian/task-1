import React from "react";
import { Form } from "react-bootstrap";
import "./AddNewItem.css";

const AddNewItem = () => {
  return (
    <>
      <div className="add-item-container">
        <h1>Add New Item </h1>
        <h3 className="item-type-subtitle">
          What kind of item do you like to add?
        </h3>
        <div className="add-item-checkbox-item">
          <Form.Check
            inline
            type="radio"
            name="services"
            label="Services"
            id="services"
          />
          <Form.Check
            inline
            type="radio"
            name="products"
            label="Products"
            id="products"
          />
        </div>
        <Form.Label className="add-item-txt-label">Name *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Eg. Business Consulting"
          className="input-text"
        />
        <Form.Label className="add-item-txt-label">Discreption</Form.Label>
        <Form.Control
          type="text"
          placeholder="Describe your product"
          className="input-text"
        />
        <Form.Label className="add-item-txt-label">Price *</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter amount"
          className="input-text"
        />
        <div className="buttons">
          <button type="submit" className="button light">
            Cancel
          </button>
          <button type="submit" className="button dark">
            Add Item
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewItem;
