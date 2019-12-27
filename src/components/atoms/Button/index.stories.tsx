import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '.';

export default {
  title: 'Atoms / Button',
};

const styleTypeS = {
  label: 'styletype',
  options: [
    'primary',
    'secondary',
    'danger',
    'alert',
    'success',
    'transparent',
    'transparent-border',
  ],
  defaultValue: 'primary',
};

export const general: React.FC = () => (
  <Button
    styletype={select(
      styleTypeS.label,
      styleTypeS.options,
      styleTypeS.defaultValue,
    )}
    disabled={boolean('disabled', false)}
    children={text('content', 'Button')}
    onClick={action('onClick')}
  />
);

export const anchor: React.FC = () => (
  <Button
    styletype={select(
      styleTypeS.label,
      styleTypeS.options,
      styleTypeS.defaultValue,
    )}
    disabled={boolean('disabled', false)}
    children={text('content', 'Button')}
    href={text('href', 'https://naver.com')}
    onClick={action('onClick')}
  />
);

export const link: React.FC = () => (
  <>
    <Button
      styletype={select(
        styleTypeS.label,
        styleTypeS.options,
        styleTypeS.defaultValue,
      )}
      disabled={boolean('disabled', false)}
      children={text('content', 'Button')}
      to={text('to', '/signup')}
      onClick={action('onClick')}
    />
  </>
);

export const allstyle: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Button
      styletype={'primary'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Button
      styletype={'secondary'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Button
      styletype={'danger'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Button
      styletype={'alert'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Button
      styletype={'success'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Button
      styletype={'transparent'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Button
      styletype={'transparent-border'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
    <Button
      styletype={'transparent-hover'}
      disabled={boolean('disabled', false)}
      children={'Button'}
      onClick={action('onClick')}
    />
  </div>
);
