import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упреждать: PerfectVerb = {
  name: Word('упреждать', 6),
  singular1stPerson: Word('упреждаю', 6),
  singular2ndPerson: Word('упреждаешь', 6),
  singular3rdPerson: Word('упреждает', 6),
  plural1stPerson: Word('упреждаем', 6),
  plural2ndPerson: Word('упреждаете', 6),
  plural3rdPerson: Word('упреждают', 6),
  masculinePast: Word('упреждал', 6),
  femininePast: Word('упреждала', 6),
  neuterPast: Word('упреждало', 6),
  pluralPast: Word('упреждали', 6),
  imperativeInformal: Word('упреждай', 6),
  imperativeFormal: Word('упреждайте', 6),
  imperfect: [],
};

perfectVerbs.set(упреждать.name.text, упреждать);

export { упреждать };