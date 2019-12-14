import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтапливать: PerfectVerb = {
  name: Word('подтапливать', 4),
  singular1stPerson: Word('подтапливаю', 4),
  singular2ndPerson: Word('подтапливаешь', 4),
  singular3rdPerson: Word('подтапливает', 4),
  plural1stPerson: Word('подтапливаем', 4),
  plural2ndPerson: Word('подтапливаете', 4),
  plural3rdPerson: Word('подтапливают', 4),
  masculinePast: Word('подтапливал', 4),
  femininePast: Word('подтапливала', 4),
  neuterPast: Word('подтапливало', 4),
  pluralPast: Word('подтапливали', 4),
  imperativeInformal: Word('подтапливай', 4),
  imperativeFormal: Word('подтапливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подтапливать.name.text, подтапливать);

export { подтапливать };