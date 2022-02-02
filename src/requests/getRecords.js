// getRecords.js - Fetches Kintone records, transforms response, & returns array of objects per record
/**
 * Notes on Kintone responses:
 * record.x/y/z.value = value of the x, y, z coordinate fields
 * record.shape.value = the type of shape we will be using
 * record.$id.value = value of the Record number field (unique key for the record)
 */

 export default async function getRecords() {

  const body = {
    'app': kintone.app.getId(),
    'query': 'order by $id asc'
  };

  const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body
  );
  let listItemArray = [];

  let respRecords = resp.records; // array of records (objects)

  listItemArray = respRecords.map(function (record) {
    return {
      uniqueKey: record.$id.value, // $id = Automatically generated Record ID
      x: record.x.value,
      y: record.y.value,
      z: record.z.value,
      shape: record.shape.value
    }
  });

  console.log('listItemArray: \n', listItemArray);

  // Used in setListItems() and setSearchResults() in index.js
  return listItemArray;
};