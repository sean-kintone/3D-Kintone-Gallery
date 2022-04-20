// getRecords.js - Fetches Kintone records, transforms response, & returns array of objects per record
/**
 * Notes on Kintone responses:
 * record.length/width/depth.value = value of the length, width, depth fields
 * record.shapeType.value = the type of shape we will be using
 * record.$id.value = value of the Record number field (unique key for the record)
 */

 export default async function getRecords() {

  const body = {
    'app': kintone.app.getId(),
    'query': kintone.app.getQuery(),
  };

  const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body
  );
  let listItemArray = [];

  let respRecords = resp.records; // array of records (objects)

  listItemArray = respRecords.map(function (record) {
    return {
      uniqueKey: record.$id.value, // $id = Automatically generated Record ID
      length: record.length.value,
      width: record.width.value,
      depth: record.depth.value,
      shapeType: record.shapeType.value
    }
  });

  return listItemArray;
};