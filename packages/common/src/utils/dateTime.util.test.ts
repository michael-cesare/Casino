import { differenceInMS } from './dateTime.util';

describe( 'dateTimeUtil-differenceInMS', () => {
  it( 'should return positive', () => {
    const date1 = new Date();
    date1.setHours( 1 );
    date1.setMinutes( 12 );
    date1.setSeconds( 1 );
    const date2 = new Date();
    date2.setHours( 1 );
    date2.setMinutes( 12 );
    date2.setSeconds( 2 );

    expect( differenceInMS( date1, date2 ) ).toBe( 60 );
  } );

  it('example spec', () => {
    expect(true).toBe(true);
  });
} );
