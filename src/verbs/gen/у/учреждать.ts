import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учреждать: PerfectVerb = {
  name: Word('учреждать', 6),
  singular1stPerson: Word('учреждаю', 6),
  singular2ndPerson: Word('учреждаешь', 6),
  singular3rdPerson: Word('учреждает', 6),
  plural1stPerson: Word('учреждаем', 6),
  plural2ndPerson: Word('учреждаете', 6),
  plural3rdPerson: Word('учреждают', 6),
  masculinePast: Word('учреждал', 6),
  femininePast: Word('учреждала', 6),
  neuterPast: Word('учреждало', 6),
  pluralPast: Word('учреждали', 6),
  imperativeInformal: Word('учреждай', 6),
  imperativeFormal: Word('учреждайте', 6),
  imperfect: [],
};

perfectVerbs.set(учреждать.name.text, учреждать);

export { учреждать };