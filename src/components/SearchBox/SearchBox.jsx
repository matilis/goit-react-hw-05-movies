import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="input" />
      <Button type="submit">Search</Button>
    </Form>
  );
};
SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
