import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 1;

const read: Verb = {
  name: Word('видеть', stress),
  singular1stPerson: Word('ви́жу', stress),
  singular2ndPerson: Word('ви́дишь', stress),
  singular3rdPerson: Word('ви́дит', stress),
  plural1stPerson: Word('ви́дим', stress),
  plural2ndPerson: Word('ви́дите', stress),
  plural3rdPerson: Word('ви́дят', stress),
  masculinePast: Word('ви́дел', stress),
  femininePast: Word('ви́дела', stress),
  neuterPast: Word('ви́дело', stress),
  pluralPast: Word('ви́дели', stress),
};

export default read;
