import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запродавать: PerfectVerb = {
  name: Word('запродавать', 8),
  singular1stPerson: Word('запродаю', 7),
  singular2ndPerson: Word('запродаёшь', 1),
  singular3rdPerson: Word('запродаёт', 1),
  plural1stPerson: Word('запродаём', 1),
  plural2ndPerson: Word('запродаёте', 1),
  plural3rdPerson: Word('запродают', 7),
  masculinePast: Word('запродавал', 8),
  femininePast: Word('запродавала', 8),
  neuterPast: Word('запродавало', 8),
  pluralPast: Word('запродавали', 8),
  imperativeInformal: Word('запродавай', 8),
  imperativeFormal: Word('запродавайте', 8),
  imperfect: [],
};

perfectVerbs.set(запродавать.name.text, запродавать);

export { запродавать };