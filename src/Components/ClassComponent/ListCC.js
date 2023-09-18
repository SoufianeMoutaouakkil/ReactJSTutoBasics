import React, { Component } from "react";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Item 1", category: "A" },
        { id: 2, name: "Item 2", category: "B" },
        { id: 3, name: "Item 3", category: "A" },
        { id: 4, name: "Item 4", category: "C" }
      ],
      filterCategory: "All",
      sortBy: "name"
    };
  }

  handleCategoryChange = (event) => {
    this.setState({ filterCategory: event.target.value });
  };

  handleSortChange = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  handleRemoveItem = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id)
    }));
  };

  render() {
    const { items, filterCategory, sortBy } = this.state;

    // Filter items based on the selected category
    const filteredItems =
      filterCategory === "All"
        ? items
        : items.filter((item) => item.category === filterCategory);

    filteredItems.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    // in JSX list we need key, but never use index of map as key /!\.
    return (
      <div>
        <h2>Item List</h2>
        <label>
          Filter by Category:
          <select value={filterCategory} onChange={this.handleCategoryChange}>
            <option value="All">All</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
            <option value="C">Category C</option>
          </select>
        </label>
        <label>
          Sort by:
          <select value={sortBy} onChange={this.handleSortChange}>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </label>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} (Category: {item.category})
              <button onClick={() => this.handleRemoveItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
