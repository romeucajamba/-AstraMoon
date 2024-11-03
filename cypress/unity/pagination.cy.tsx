/// <reference types="cypress" />
import React from 'react';
import { mount } from '@cypress/react18';
import Pagination from '../../src/components/pagination/pagination';
import sinon from 'sinon';

describe('Pagination Component Unit Test', () => {
  const mockSetRowsPerPage = sinon.stub();

  it('should render the pagination component correctly', () => {
    mount(
      <Pagination
        page={1}
        pages={20}
        setRowsPerPage={mockSetRowsPerPage}
        rowsPerPage="5"
      />
    );

    cy.contains('Showing 5 of 200 items').should('be.visible');

    cy.get('button').contains('1').should('be.disabled'); 
    cy.get('button').contains('>').should('not.be.disabled');
  });

  it('should call setRowsPerPage when a new page size is selected', () => {
    mount(
      <Pagination
        page={1}
        pages={20}
        setRowsPerPage={mockSetRowsPerPage}
        rowsPerPage="5"
      />
    );

    cy.get('select').select('10');
    cy.wrap(mockSetRowsPerPage).should('have.been.calledWith', '10');
  });
});
