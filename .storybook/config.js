import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css'
// automatically import all files ending in *.stories.js
const req = requireContext('../src/components', true, /\.stories\.js$/);

configure(req, module);