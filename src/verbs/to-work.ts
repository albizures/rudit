import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 3;

const read: Verb = {
  name: Word('работать', stress),
  singular1stPerson: Word('рабо́таю', stress),
  singular2ndPerson: Word('рабо́таешь', stress),
  singular3rdPerson: Word('рабо́тает', stress),
  plural1stPerson: Word('рабо́таем', stress),
  plural2ndPerson: Word('рабо́таете', stress),
  plural3rdPerson: Word('рабо́тают', stress),
  masculinePast: Word('рабо́тал', stress),
  femininePast: Word('рабо́тала', stress),
  neuterPast: Word('рабо́тало', stress),
  pluralPast: Word('рабо́тали', stress),
};

export default read;
