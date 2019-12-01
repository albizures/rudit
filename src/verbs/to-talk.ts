import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 5;

const read: Verb = {
  name: Word('говорить', stress),
  singular1stPerson: Word('говорю́', stress),
  singular2ndPerson: Word('говори́шь', stress),
  singular3rdPerson: Word('говори́т', stress),
  plural1stPerson: Word('говори́м', stress),
  plural2ndPerson: Word('говори́те', stress),
  plural3rdPerson: Word('говоря́т', stress),
  masculinePast: Word('говори́л', stress),
  femininePast: Word('говори́ла', stress),
  neuterPast: Word('говори́ло', stress),
  pluralPast: Word('говори́ли', stress),
  imperativeInformal: Word('говори́', stress),
  imperativeFormal: Word('говори́те', stress),
};

export default read;
