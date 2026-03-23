export const initialState = {
  count: 0,
  draftCount: 0,
};

type Action = {
  type: string;
  payload: unknown;
};

// Improvement: Define a proper Action type instead of using 'any'.

export const counterReducer = (state = initialState, action: Action) => {
  console.log({ action });
  const { count, draftCount } = state;

  if (action.type === 'increment') {
    const newCount = count + 1;
    return { count: newCount, draftCount: newCount };
  }

  if (action.type === 'decrement') {
    const newCount = count - 1;
    return { count: newCount, draftCount: newCount };
  }

  if (action.type === 'reset') {
    return { count: 0, draftCount: 0 };
  }

  if (action.type === 'updateDraftCount') {
    console.log('updateDraftCount');
    return { count, draftCount: action.payload };
  }

  if (action.type === 'updateCountFromDraft') {
    return { count: Number(draftCount), draftCount };
  }

  return state;
};
