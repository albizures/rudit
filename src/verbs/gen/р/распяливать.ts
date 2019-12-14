import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распяливать: PerfectVerb = {
  name: Word('распяливать', 4),
  singular1stPerson: Word('распяливаю', 4),
  singular2ndPerson: Word('распяливаешь', 4),
  singular3rdPerson: Word('распяливает', 4),
  plural1stPerson: Word('распяливаем', 4),
  plural2ndPerson: Word('распяливаете', 4),
  plural3rdPerson: Word('распяливают', 4),
  masculinePast: Word('распяливал', 4),
  femininePast: Word('распяливала', 4),
  neuterPast: Word('распяливало', 4),
  pluralPast: Word('распяливали', 4),
  imperativeInformal: Word('распяливай', 4),
  imperativeFormal: Word('распяливайте', 4),
  imperfect: [],
};

perfectVerbs.set(распяливать.name.text, распяливать);

export { распяливать };