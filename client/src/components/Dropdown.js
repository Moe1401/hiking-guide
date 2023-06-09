import React, { useState, useEffect } from 'react';

const Accordion = ({title, children}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={setOpen.bind(this, !open)}>
        {title}
      </div>
      {open && (
      <div>
        {children}
      </div>)
      }
    </div>
  );

}

const Dropdown = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/trail');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    const selectedItemId = event.target.value;
    setSelectedItem(null); // Reset the selected item
    
    if (selectedItemId) {
      fetchSelectedItem(selectedItemId);
    }
  };

  const fetchSelectedItem = async (selectedItemId) => {
    try {
      const response = await fetch(`/api/trail/${selectedItemId}`);
      const selectedItem = await response.json();
      setSelectedItem(selectedItem);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">Select an item</option>
        {items.map(item => (
          <option key={item._id} value={item._id}>
            {item.trail}
          </option>
        ))}
      </select>

      {selectedItem && (
        <div>
          <h2>Selected Item:</h2>
          <p>{selectedItem.trail}</p>
          <p>{selectedItem.description}</p>
          <Accordion title="Landscape">{selectedItem.landscape}</Accordion>
          <Accordion title="Permits">
          <ul>{selectedItem.permits.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))}</ul>
          </Accordion>
          <Accordion title="Parking">
          <ul>{selectedItem.parking.map((item, i) => (
          <li key={i}>
            {item}
          </li>
        ))}</ul>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
