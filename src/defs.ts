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
    },
    {
      name: 'isPrivate',
      title: 'Required',
      inputType: 'Boolean',
    },
    {
      name: 'isSortable',
      title: 'Sortable',
      inputType: 'Boolean',
    },
    {
      name: 'isSearchable',
      title: 'Searchable',
      inputType: 'Boolean',
    },
    {
      name: 'isUnique',
      title: 'Unique',
      inputType: 'Boolean',
    },
    {
      name: 'min',
      title: 'Min value',
      inputType: 'Inherit',
    },
    {
      name: 'max',
      title: 'Max value',
      inputType: 'Inherit',
    },
    {
      name: 'defaultValue',
      title: 'Default value',
      inputType: 'Inherit',
    },
    {
      name: 'multiple',
      title: 'Multiple',
      inputType: 'Boolean',
    },
    {
      name: 'referencedModel',
      title: 'Referenced Model',
      inputType: 'String',
    },
  ];
  return fieldAttributes;
};
