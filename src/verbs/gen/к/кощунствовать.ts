import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кощунствовать: PerfectVerb = {
  name: Word('кощунствовать', 3),
  singular1stPerson: Word('кощунствую', 3),
  singular2ndPerson: Word('кощунствуешь', 3),
  singular3rdPerson: Word('кощунствует', 3),
  plural1stPerson: Word('кощунствуем', 3),
  plural2ndPerson: Word('кощунствуете', 3),
  plural3rdPerson: Word('кощунствуют', 3),
  masculinePast: Word('кощунствовал', 3),
  femininePast: Word('кощунствовала', 3),
  neuterPast: Word('кощунствовало', 3),
  pluralPast: Word('кощунствовали', 3),
  imperativeInformal: Word('кощунствуй', 3),
  imperativeFormal: Word('кощунствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(кощунствовать.name.text, кощунствовать);

export { кощунствовать };