interface Word {
  text: string;
  stress: number;
}

const Word = (text: string, stress: number): Word => {
  if (text.length > stress) {
    throw new Error('Invalid stress');
  }

  return {
    text,
    stress,
  };
};

export { Word };
