import React from 'react';
import { render, screen } from '@testing-library/react';
import FetchData from './TableJoueurs';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Compo', () => {
  beforeEach(() => {
    render(<FetchData />);
  })
  it('affiche correctement les tables heads', async () => {
    expect(screen.getByText('Nom').closest('a')).toHaveAttribute('href', 'https://twitter.com/mihailgaberov');
  })
})
