import { differenceInMS } from './dateTime.util';

describe( 'dateTimeUtil-differenceInMS', () => {
  it( 'should return positive', () => {
    const date1 = new Date();
    date1.setHours( 1, 12, 1, 0 );
    const date2 = new Date();
    date2.setHours( 1, 12, 2, 0 );
    const expected = 1 * 1000;
    const actual = differenceInMS( date1, date2 );
    expect( actual ).toBe( expected );
  } );

  it('example spec', () => {
    expect(true).toBe(true);
  });
} );
