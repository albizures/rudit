import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 5;

const read: Verb = {
  name: Word('отдыхать', stress),
  singular1stPerson: Word('отдыха́ю', stress),
  singular2ndPerson: Word('отдыха́ешь', stress),
  singular3rdPerson: Word('отдыха́ет', stress),
  plural1stPerson: Word('отдыха́ем', stress),
  plural2ndPerson: Word('отдыха́ете', stress),
  plural3rdPerson: Word('отдыха́ют', stress),
  masculinePast: Word('отдыха́л', stress),
  femininePast: Word('отдыха́ла', stress),
  neuterPast: Word('отдыха́ло', stress),
  pluralPast: Word('отдыха́ли', stress),
};

export default read;
