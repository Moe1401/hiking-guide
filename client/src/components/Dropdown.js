import React, { useState, useEffect } from 'react';
import JsxParser from 'react-jsx-parser'
import { gMap, openStreetMap, sentinelMap, gMapEmbed, openStreetMapEmbed } from "../utils/maps"

const Accordion = ({ title, children }) => {
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

  const map_settings = {
    lat: selectedItem?.map_latitude,
    lon: selectedItem?.map_longitude,
    zoom: selectedItem?.map_zoom,
  }

  const map_embed_settings = {
    lat: selectedItem?.map_latitude,
    lon: selectedItem?.map_longitude,
    zoom: selectedItem?.map_zoom_embed || selectedItem?.map_zoom,
  }

  const GMapComponent = () => (
    <JsxParser
      bindings={{}}
      components={{}}
      jsx={gMapEmbed(map_embed_settings)}
    />
  )

  const OSMapComponent = () => (
    <JsxParser
      bindings={{}}
      components={{}}
      jsx={openStreetMapEmbed(map_embed_settings)}
    />
  )

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
        <div className="container" style={{ marginLeft: "2rem" }}>
          <div style={{ backgroundColor: "white", opacity: "85%" }}>
            <div style={{padding: "10px"}}>
              <h2>Selected Item:</h2>
              <p>{selectedItem.trail}</p>
              <p>{selectedItem.description}</p>
              <GMapComponent />
              <OSMapComponent />
              <a
                href={gMap(map_settings)}
                target="_blank"
                rel="noreferrer noopener"
              >
                Google Maps
              </a>
              <a
                href={openStreetMap(map_settings)}
                target="_blank"
                rel="noreferrer noopener"
              >
                OpenStreetMap
              </a>
              <a
                href={sentinelMap(map_settings)}
                target="_blank"
                rel="noreferrer noopener"
              >
                View Trail Conditions
              </a>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;