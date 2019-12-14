import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присаливать: PerfectVerb = {
  name: Word('присаливать', 4),
  singular1stPerson: Word('присаливаю', 4),
  singular2ndPerson: Word('присаливаешь', 4),
  singular3rdPerson: Word('присаливает', 4),
  plural1stPerson: Word('присаливаем', 4),
  plural2ndPerson: Word('присаливаете', 4),
  plural3rdPerson: Word('присаливают', 4),
  masculinePast: Word('присаливал', 4),
  femininePast: Word('присаливала', 4),
  neuterPast: Word('присаливало', 4),
  pluralPast: Word('присаливали', 4),
  imperativeInformal: Word('присаливай', 4),
  imperativeFormal: Word('присаливайте', 4),
  imperfect: [],
};

perfectVerbs.set(присаливать.name.text, присаливать);

export { присаливать };