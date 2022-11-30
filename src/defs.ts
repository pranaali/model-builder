export const getBasicFieldPropertyOptions = () => {
  const fieldBasicProperties = [
    {
      name: 'title',
      title: 'Field name',
      required: true,
      inputType: 'String',
    },
    {
      name: 'description',
      title: 'Description',
      inputType: 'String',
    },
    {
      name: 'fieldType',
      title: 'Field Type',
      inputType: 'String',
      values: [],
    },
  ];

  return fieldBasicProperties;
};

export const getFieldAttributeOptions = () => {
  const fieldAttributes = [
    {
      name: 'isRequired',
      title: 'Required',
      inputType: 'Boolean',
      values: [true, false],
    },
    {
      name: 'isSortable',
      title: 'Sortable',
      inputType: 'Boolean',
      values: [true, false],
    },
    {
      name: 'isSearchable',
      title: 'Required',
      inputType: 'Boolean',
      values: [true, false],
    },
    {
      name: 'isUnique',
      title: 'Unique',
      inputType: 'Boolean',
      values: [true, false],
    },
    {
      name: 'min',
      title: 'Min value',
      inputType: 'Dynamic',
    },
    {
      name: 'max',
      title: 'Max value',
      inputType: 'Dynamic',
    },
    {
      name: 'defaultValue',
      title: 'Default value',
      inputType: 'Dynamic',
    },
  ];
  return fieldAttributes;
};
