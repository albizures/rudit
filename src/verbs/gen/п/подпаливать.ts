import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпаливать: PerfectVerb = {
  name: Word('подпаливать', 4),
  singular1stPerson: Word('подпаливаю', 4),
  singular2ndPerson: Word('подпаливаешь', 4),
  singular3rdPerson: Word('подпаливает', 4),
  plural1stPerson: Word('подпаливаем', 4),
  plural2ndPerson: Word('подпаливаете', 4),
  plural3rdPerson: Word('подпаливают', 4),
  masculinePast: Word('подпаливал', 4),
  femininePast: Word('подпаливала', 4),
  neuterPast: Word('подпаливало', 4),
  pluralPast: Word('подпаливали', 4),
  imperativeInformal: Word('подпаливай', 4),
  imperativeFormal: Word('подпаливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подпаливать.name.text, подпаливать);

export { подпаливать };