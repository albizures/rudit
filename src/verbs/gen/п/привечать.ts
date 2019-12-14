import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привечать: PerfectVerb = {
  name: Word('привечать', 6),
  singular1stPerson: Word('привечаю', 6),
  singular2ndPerson: Word('привечаешь', 6),
  singular3rdPerson: Word('привечает', 6),
  plural1stPerson: Word('привечаем', 6),
  plural2ndPerson: Word('привечаете', 6),
  plural3rdPerson: Word('привечают', 6),
  masculinePast: Word('привечал', 6),
  femininePast: Word('привечала', 6),
  neuterPast: Word('привечало', 6),
  pluralPast: Word('привечали', 6),
  imperativeInformal: Word('привечай', 6),
  imperativeFormal: Word('привечайте', 6),
  imperfect: [],
};

perfectVerbs.set(привечать.name.text, привечать);

export { привечать };