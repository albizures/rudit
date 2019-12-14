import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const солгать: PerfectVerb = {
  name: Word('солгать', 4),
  singular1stPerson: Word('солгу', 4),
  singular2ndPerson: Word('солжёшь', 1),
  singular3rdPerson: Word('солжёт', 1),
  plural1stPerson: Word('солжём', 1),
  plural2ndPerson: Word('солжёте', 6),
  plural3rdPerson: Word('солгут', 4),
  masculinePast: Word('солгал', 4),
  femininePast: Word('солгала', 6),
  neuterPast: Word('солгало', 4),
  pluralPast: Word('солгали', 4),
  imperativeInformal: Word('солги', 4),
  imperativeFormal: Word('солгите', 4),
  imperfect: ['лгать'],
};

perfectVerbs.set(солгать.name.text, солгать);

export { солгать };