const {
  createModel,
  saveFields,
  addField,
  getDynamicModel,
  getModelFields,
  removeField,
} = require('@pranaali/model-builder');

const createDynamicModel = async () => {
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
  const model = await createModel({ title: 'Student' });
  const modelId = model.id;

  console.log(`modelId->`, modelId);

  const savedFields = await saveFields(modelId, inputFields);

  console.log(`savedFields->`, savedFields);

  const Student = await getDynamicModel(model.name, savedFields);

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
  console.log(newStudent);
};

const getStudents = async () => {
  const Student = await getDynamicModel('student');

  const result = await Student.find({ firstName: 'John' }).exec();
  console.log(`result->`, result);
};

const getFields = async () => {
  const fields = await getModelFields('student');
  console.log(`getFields->`, fields);
};

const createModelWhichHasReference = async () => {
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
      fieldType: 'reference',
      referencedModel: 'Student',
    },
  ];

  const model = await createModel({ title: 'Category' });
  const modelId = model.id;

  console.log(`modelId->`, modelId);

  const savedFields = await saveFields(modelId, fields);

  console.log(`savedFields->`, savedFields);

  const Category = await getDynamicModel(model.name, savedFields);

  const data = {
    name: 'Popular Category',
    student: '63865598d8300ad48a9f5597',
  };

  const newCategory = new Category(data);
  await newCategory.save();
  console.log(newCategory);
};

const removeAField = async () => {
  const res = await removeField('63865597d8300ad48a9f5582', 'firstName');
  console.log(res);
};

const saveAField = async () => {
  const res = await addField('63865597d8300ad48a9f5582', {
    title: 'First Name',
    fieldType: 'text',
    isRequired: 1,
    isSearchable: 1,
    isSortable: 1,
    max: 100,
  });
  console.log(res);
};

module.exports = async () => {
  // await saveAField();
  //
  // await removeAField();
  // await createDynamicModel();
  // await getFields();
  // await getStudents();
  // await createModelWhichHasReference();
};
