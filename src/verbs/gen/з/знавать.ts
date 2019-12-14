import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const знавать: PerfectVerb = {
  name: Word('знавать', 4),
  singular1stPerson: Word('знаваю', 4),
  singular2ndPerson: Word('знаваешь', 4),
  singular3rdPerson: Word('знавает', 4),
  plural1stPerson: Word('знаваем', 4),
  plural2ndPerson: Word('знаваете', 4),
  plural3rdPerson: Word('знавают', 4),
  masculinePast: Word('знавал', 4),
  femininePast: Word('знавала', 4),
  neuterPast: Word('знавало', 4),
  pluralPast: Word('знавали', 4),
  imperativeInformal: Word('знавай', 4),
  imperativeFormal: Word('знавайте', 4),
  imperfect: [],
};

perfectVerbs.set(знавать.name.text, знавать);

export { знавать };