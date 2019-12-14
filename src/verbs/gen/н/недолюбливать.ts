import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недолюбливать: PerfectVerb = {
  name: Word('недолюбливать', 5),
  singular1stPerson: Word('недолюбливаю', 5),
  singular2ndPerson: Word('недолюбливаешь', 5),
  singular3rdPerson: Word('недолюбливает', 5),
  plural1stPerson: Word('недолюбливаем', 5),
  plural2ndPerson: Word('недолюбливаете', 5),
  plural3rdPerson: Word('недолюбливают', 5),
  masculinePast: Word('недолюбливал', 5),
  femininePast: Word('недолюбливала', 5),
  neuterPast: Word('недолюбливало', 5),
  pluralPast: Word('недолюбливали', 5),
  imperativeInformal: Word('недолюбливай', 5),
  imperativeFormal: Word('недолюбливайте', 5),
  imperfect: [],
};

perfectVerbs.set(недолюбливать.name.text, недолюбливать);

export { недолюбливать };