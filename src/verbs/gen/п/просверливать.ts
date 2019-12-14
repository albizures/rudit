import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просверливать: PerfectVerb = {
  name: Word('просверливать', 5),
  singular1stPerson: Word('просверливаю', 5),
  singular2ndPerson: Word('просверливаешь', 5),
  singular3rdPerson: Word('просверливает', 5),
  plural1stPerson: Word('просверливаем', 5),
  plural2ndPerson: Word('просверливаете', 5),
  plural3rdPerson: Word('просверливают', 5),
  masculinePast: Word('просверливал', 5),
  femininePast: Word('просверливала', 5),
  neuterPast: Word('просверливало', 5),
  pluralPast: Word('просверливали', 5),
  imperativeInformal: Word('просверливай', 5),
  imperativeFormal: Word('просверливайте', 5),
  imperfect: [],
};

perfectVerbs.set(просверливать.name.text, просверливать);

export { просверливать };