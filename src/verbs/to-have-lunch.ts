import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 2;

const read: Verb = {
  name: Word('обедать', stress),
  singular1stPerson: Word('обе́даю', stress),
  singular2ndPerson: Word('обе́даешь', stress),
  singular3rdPerson: Word('обе́дает', stress),
  plural1stPerson: Word('обе́даем', stress),
  plural2ndPerson: Word('обе́даете', stress),
  plural3rdPerson: Word('обе́дают', stress),
  masculinePast: Word('обе́дал', stress),
  femininePast: Word('обе́дала', stress),
  neuterPast: Word('обе́дало', stress),
  pluralPast: Word('обе́дали', stress),
  imperativeInformal: Word('обе́дай', stress),
  imperativeFormal: Word('обе́дайте', stress),
};

export default read;
