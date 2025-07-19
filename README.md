Problem Statement: Pin Drop with Remarks Functionality

Objective:
Develop a user-friendly tool that allows users to drop pins on a map, enter remarks, and automatically fetch the address for the pin location. The saved pins should be viewable in a list format.
Functionality:
Map Interface:
The tool should provide a clear and interactive map interface where users can visualize the locations.


Pin Drop:
Users should be able to click anywhere on the map to drop a pin. A popup should appear immediately after dropping the pin, allowing users to enter optional remarks.


Address Fetching (Not Mandatory but bonus Points would be awarded):
After dropping the pin, the tool should use the pin's latitude and longitude to automatically fetch the corresponding address using an open API (e.g., OpenStreetMap's Nominatim API).


Pin Submission:
Upon submitting the popup form, the pin, along with the entered remarks and fetched address, should be saved.


Saved Pins:
All saved pins should be visible as a list in a sidebar. Each pin in the list should display the remark and fetched address.


Pin Navigation:
Clicking on any pin from the sidebar should navigate the map to the location of that pin and highlight it.


Local Storage:
Local storage should be used to persist the pins, remarks, and fetched addresses across sessions.
Success Criteria:
Users can comfortably navigate and interact with the map interface.
Pins can be dropped easily, and remarks can be entered via the popup.
The tool automatically fetches the address based on the pin's latitude/longitude using an open API.
All saved pins are visible in the sidebar with corresponding remarks and addresses.
Clicking on a saved pin brings the user back to the exact pin location on the map.
Local storage effectively retains all pin data (including the address) between sessions.
