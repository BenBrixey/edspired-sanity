import { MdGroups as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'club',
  title: 'Clubs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Club',
      type: 'string',
      description: 'Name of the club',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'paragraphOne',
      title: 'Paragraph One',
      type: 'text',
    },
    {
      name: 'paragraphTwo',
      title: 'Paragraph Two',
      type: 'text',
    },
    {
      name: 'paragraphThree',
      title: 'Paragraph Three',
      type: 'text',
    },
    {
      name: 'paragraphFour',
      title: 'Paragraph Four',
      type: 'text',
    },
    {
      name: 'paragraphFive',
      title: 'Paragraph Five',
      type: 'text',
    },
    {
      name: 'smallPrintOne',
      title: 'Small Print One',
      type: 'text',
    },
    {
      name: 'smallPrintTwo',
      title: 'Small Print Two',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the club in pence',
      validation: (Rule) => Rule.min(5000),
      inputComponent: PriceInput,
    },
    {
      title: 'Date and Start Time',
      name: 'launchAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'beginner',
      title: 'Beginner Friendly',
      type: 'boolean',
      description: 'Is this club beginner friendly',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      beginner: 'beginner',
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.beginner ? '(Easy)' : '(Advanced)'}`,
    }),
  },
};
