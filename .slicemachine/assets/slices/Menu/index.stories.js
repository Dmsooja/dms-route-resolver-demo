import MyComponent from '../../../../slices/Menu';

export default {
  title: 'slices/Menu'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"linkLabel":[{"type":"paragraph","text":"Enim non elit nostrud duis voluptate incididunt consequat sit ut est laborum consequat proident ex.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},"slice_type":"menu","id":"_Default"}} />
_Default.storyName = ''

export const _DropdownMenu = () => <MyComponent slice={{"variation":"dropdownMenu","version":"sktwi1xtmkfgx8626","items":[{"dropdown_level_2_label":[{"type":"paragraph","text":"Et do cupidatat duis labore reprehenderit.","spans":[]}],"dropdown_level_2_link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"dropdownLevel1Label":[{"type":"paragraph","text":"Nisi adipisicing commodo magna consectetur eu ipsum labore adipisicing elit velit sit voluptate dolore id mollit.","spans":[]}]},"slice_type":"menu","id":"_DropdownMenu"}} />
_DropdownMenu.storyName = ''
