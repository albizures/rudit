import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 4;

const read: Verb = {
  name: Word('звонить', stress),
  singular1stPerson: Word('звоню́', stress),
  singular2ndPerson: Word('звони́шь', stress),
  singular3rdPerson: Word('звони́т', stress),
  plural1stPerson: Word('звони́м', stress),
  plural2ndPerson: Word('звони́те', stress),
  plural3rdPerson: Word('звоня́т', stress),
  masculinePast: Word('звони́л', stress),
  femininePast: Word('звони́ла', stress),
  neuterPast: Word('звони́ло', stress),
  pluralPast: Word('звони́ли', stress),
  imperativeInformal: Word('звони́', stress),
  imperativeFormal: Word('звони́те', stress),
};

export default read;
