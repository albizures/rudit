import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздавать: PerfectVerb = {
  name: Word('воздавать', 6),
  singular1stPerson: Word('воздаю', 5),
  singular2ndPerson: Word('воздаёшь', 5),
  singular3rdPerson: Word('воздаёт', 5),
  plural1stPerson: Word('воздаём', 5),
  plural2ndPerson: Word('воздаёте', 5),
  plural3rdPerson: Word('воздают', 5),
  masculinePast: Word('воздавал', 6),
  femininePast: Word('воздавала', 6),
  neuterPast: Word('воздавало', 6),
  pluralPast: Word('воздавали', 6),
  imperativeInformal: Word('воздавай', 6),
  imperativeFormal: Word('воздавайте', 6),
  imperfect: [],
};

perfectVerbs.set(воздавать.name.text, воздавать);

export { воздавать };