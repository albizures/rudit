import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгуливать: PerfectVerb = {
  name: Word('выгуливать', 3),
  singular1stPerson: Word('выгуливаю', 3),
  singular2ndPerson: Word('выгуливаешь', 3),
  singular3rdPerson: Word('выгуливает', 3),
  plural1stPerson: Word('выгуливаем', 3),
  plural2ndPerson: Word('выгуливаете', 3),
  plural3rdPerson: Word('выгуливают', 3),
  masculinePast: Word('выгуливал', 3),
  femininePast: Word('выгуливала', 3),
  neuterPast: Word('выгуливало', 3),
  pluralPast: Word('выгуливали', 3),
  imperativeInformal: Word('выгуливай', 3),
  imperativeFormal: Word('выгуливайте', 3),
  imperfect: [],
};

perfectVerbs.set(выгуливать.name.text, выгуливать);

export { выгуливать };