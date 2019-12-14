import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замусоливать: PerfectVerb = {
  name: Word('замусоливать', 5),
  singular1stPerson: Word('замусоливаю', 5),
  singular2ndPerson: Word('замусоливаешь', 5),
  singular3rdPerson: Word('замусоливает', 5),
  plural1stPerson: Word('замусоливаем', 5),
  plural2ndPerson: Word('замусоливаете', 5),
  plural3rdPerson: Word('замусоливают', 5),
  masculinePast: Word('замусоливал', 5),
  femininePast: Word('замусоливала', 5),
  neuterPast: Word('замусоливало', 5),
  pluralPast: Word('замусоливали', 5),
  imperativeInformal: Word('замусоливай', 5),
  imperativeFormal: Word('замусоливайте', 5),
  imperfect: [],
};

perfectVerbs.set(замусоливать.name.text, замусоливать);

export { замусоливать };