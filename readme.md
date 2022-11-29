# Model Builder

Create and update data models dynamically by using Model Builder, integrated with MondoDB

## APIs

```
createModel();

saveFields();

addField();

getDynamicModel();

getModelFields();

removeField();
```

## Field Types

| Name | Label | Type |
| ------ | ------ | ------ |
|`text`| Text | `String`|
|`richText`| Rich Text | `String`|
|`number`| Number | `Number`|  
|`date`| Date & Time | `String`|  
|`location`| Location | `Object`|  
|`media`| Media | `Object`|  
|`boolean`| Boolean | `Boolean`|  
|`array`| Array | `Array`|  
|`json`| JSON Object | `Object`|  
|`reference`| Reference | `Schema.Types.ObjectId`|

## Examples

### Adding a Dynamic Model with name 'Student'

```
  const inputFields = [
    {
      title: 'First Name',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'Last Name',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'Country',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'State',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'City',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'Area',
      fieldType: 'text',
      isRequired: 0,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'Postal Code',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 0,
      max: 8,
    },
    {
      title: 'Address Line 1',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'Address Line 2',
      fieldType: 'text',
      isRequired: 0,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
  ];

  // Create a model entry, on time process
  const model = await createModel({ title: 'Student' });
  const modelId = model.id;


  // Save all fields, on time process
  const savedFields = await saveFields(modelId, inputFields);


  // Get the model with automatically generated schema
  const Student = await getDynamicModel(model.name, savedFields);

  // Payload to save
  const data = {
    firstName: 'John',
    lastName: 'Doe',
    country: 'IN',
    state: 'MP',
    city: 'Bhopal',
    area: 'Berasia Road',
    postalCode: '546410',
    addressLine1: 'Some Address',
    addressLine2: 'Some Another Address',
  };

  const newStudent = new Student(data);
  await newStudent.save();
  ```

### Fetching Student Info from Dynamic model

```
// Get the model by model name
const Student = await getDynamicModel('student');

// Response from dynamic model
const result = await Student.find({ firstName: 'John' }).exec();
```

### Create a Referenced model with name 'Category'

```
//Another set of model definition
 const fields = [
    {
      title: 'Name',
      fieldType: 'text',
      isRequired: 1,
      isSearchable: 1,
      isSortable: 1,
      max: 100,
    },
    {
      title: 'Student',
      fieldType: 'reference', // Here, Type is 'reference'
      referencedModel: 'Student',
    },
  ];

  //Creating a 'category' model
  const model = await createModel({ title: 'Category' });
  const modelId = model.id;

  const savedFields = await saveFields(modelId, fields);

  const Category = await getDynamicModel(model.name, savedFields);

  const data = {
    name: 'Popular Category',
    student: '63865598d8300ad48a9f5597', // Referenced field
  };

  const newCategory = new Category(data);
  await newCategory.save();
  ```
