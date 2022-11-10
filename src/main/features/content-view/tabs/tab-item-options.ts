import type { MenuOption } from '$types';

const options: MenuOption[] = [
  {
    label: 'Close',
  },
  {
    label: 'Add to group',
    children: [
      {
        label: 'New Group'
      }
    ],
  },
];

export default options;
