import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кликушествовать: PerfectVerb = {
  name: Word('кликушествовать', 4),
  singular1stPerson: Word('кликушествую', 4),
  singular2ndPerson: Word('кликушествуешь', 4),
  singular3rdPerson: Word('кликушествует', 4),
  plural1stPerson: Word('кликушествуем', 4),
  plural2ndPerson: Word('кликушествуете', 4),
  plural3rdPerson: Word('кликушествуют', 4),
  masculinePast: Word('кликушествовал', 4),
  femininePast: Word('кликушествовала', 4),
  neuterPast: Word('кликушествовало', 4),
  pluralPast: Word('кликушествовали', 4),
  imperativeInformal: Word('кликушествуй', 4),
  imperativeFormal: Word('кликушествуйте', 4),
  imperfect: [],
};

perfectVerbs.set(кликушествовать.name.text, кликушествовать);

export { кликушествовать };