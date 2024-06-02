import React, { useState } from 'react';

const DashboardApp = () => {
    // Initial data with one object
    const [dataArray, setDataArray] = useState([
        { id: 0, map1: 'no', map2: 'no', isParent: true, isChildProcessed: false }
    ]);

    // Function to generate a new child object
    const createChildObject = (parentId, keySource) => {
        const childObject = {
            id: `${parentId}-child-${keySource}`, // Use the required format for child ID
            map1: 'no',
            map2: 'no',
            isParent: false,
            parentId: parentId,
            keySource: keySource,
            isChildProcessed: false
        };

        // If map1 is 'yes', set shareHolderType to 2 and isDisable to true
        if (keySource === 'map1') {
            childObject.shareHolderType = 2;
            childObject.isDisable = true;
        }

        return childObject;
    };

    // Recursive function to remove all descendants and objects whose IDs start with the given parent ID
    const removeDescendantsAndRelatedObjects = (data, parentId, keySource) => {
        console.log(data, parentId, keySource, 'ata, parentId, keySource')
        let newData = [...data];
        for (let i = 0; i < newData.length; i++) {
            const childId = newData[i].id.toString(); // Convert ID to string for consistency
            if (parentId && childId.startsWith(`${parentId}-child-${keySource}`)) {
                newData.splice(i, 1);
                i--;
            } else if (!parentId && childId.startsWith(`0-child-${keySource}`)) {
                newData.splice(i, 1);
                i--;
            } else if (newData[i].parentId === parentId && newData[i].keySource === keySource) {
                newData = removeDescendantsAndRelatedObjects(newData, newData[i].id, keySource);
                newData.splice(i, 1);
                i--;
            }
        }
        return newData;
    };
    // Function to handle map1 and map2 updates and add/remove children if necessary
    const updateMapAndRemoveChildrenAndRelatedObjects = (id, key, value) => {
        console.log(id, key, value, 'd, key, value')
        setDataArray(prevData => {
            let newData = prevData.map(obj => {
                if (obj.id === id) {
                    obj[key] = value;
                }
                return obj;
            });

            // Remove children and related objects if the value is 'no'
            if (value === 'no') {
                newData = removeDescendantsAndRelatedObjects(newData, id, key);
            }

            // Add children if the value is 'yes'
            if (value === 'yes') {
                const parentObj = newData.find(obj => obj.id === id);
                if (parentObj && !newData.some(o => o.id === `${parentObj.id}-child-${key}`)) {
                    const newChild = createChildObject(id, key);
                    newData.splice(newData.indexOf(parentObj) + 1, 0, newChild);
                }
            }

            return newData;
        });
    };

    // Function to handle row deletion
    const handleDelete = (id) => {
        setDataArray(prevData => {
            let newData = prevData.filter(obj => obj.id !== id);
            newData = removeDescendantsAndRelatedObjects(newData, id, 'map1');
            newData = removeDescendantsAndRelatedObjects(newData, id, 'map2');
            return newData;
        });
    };

    // Function to add a new parent object
    const addNewObject = () => {
        const newId = dataArray.length > 0 ? Math.max(...dataArray.filter(obj => obj.isParent).map(obj => parseInt(obj.id))) + 1 : 0;
        const newObject = {
            id: newId,
            map1: 'no',
            map2: 'no',
            isParent: true,
            isChildProcessed: false
        };
        setDataArray(prevData => [...prevData, newObject]);
    };

    return (
        <div>
            <button onClick={addNewObject} style={{ position: 'absolute', top: 10, right: 10 }}>Add Object</button>
            <ul>
                {dataArray.map(obj => (
                    <li key={obj.id}>
                        <div>Id: {obj.id}</div>
                        <div>
                            Map1:
                            <select
                                value={obj.map1}
                                onChange={(e) => updateMapAndRemoveChildrenAndRelatedObjects(obj.id, 'map1', e.target.value)}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            Map2:
                            <select
                                value={obj.map2}
                                onChange={(e) => updateMapAndRemoveChildrenAndRelatedObjects(obj.id, 'map2', e.target.value)}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(obj.id)}>Delete</button>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardApp;
