import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const барствовать: PerfectVerb = {
  name: Word('барствовать', 1),
  singular1stPerson: Word('барствую', 1),
  singular2ndPerson: Word('барствуешь', 1),
  singular3rdPerson: Word('барствует', 1),
  plural1stPerson: Word('барствуем', 1),
  plural2ndPerson: Word('барствуете', 1),
  plural3rdPerson: Word('барствуют', 1),
  masculinePast: Word('барствовал', 1),
  femininePast: Word('барствовала', 1),
  neuterPast: Word('барствовало', 1),
  pluralPast: Word('барствовали', 1),
  imperativeInformal: Word('барствуй', 1),
  imperativeFormal: Word('барствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(барствовать.name.text, барствовать);

export { барствовать };