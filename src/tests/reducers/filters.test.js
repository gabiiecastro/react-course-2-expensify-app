import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    const state = filtersReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }); 
});

test('Should setup sort BY to Amount', () => {
    const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
    }); 

test('Should setup sort BY to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
        const action = { type: 'SORT_BY_DATE'};
        const state = filtersReducers(currentState, action);
        expect(state.sortBy).toBe('date');
}); 

test('Should generate set Text filter', () => {
    const text = 'Mariana la banana';
        const action = {
            type: 'SET_TEXT_FILTER',
            text
        };
        const state = filtersReducers(undefined, action);
        expect(state.text).toBe(text);
});

test('Should set startDate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducers(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducers(undefined, action);
    expect(state.endDate).toEqual(endDate);
});