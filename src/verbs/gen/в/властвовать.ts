import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const властвовать: PerfectVerb = {
  name: Word('властвовать', 2),
  singular1stPerson: Word('властвую', 2),
  singular2ndPerson: Word('властвуешь', 2),
  singular3rdPerson: Word('властвует', 2),
  plural1stPerson: Word('властвуем', 2),
  plural2ndPerson: Word('властвуете', 2),
  plural3rdPerson: Word('властвуют', 2),
  masculinePast: Word('властвовал', 2),
  femininePast: Word('властвовала', 2),
  neuterPast: Word('властвовало', 2),
  pluralPast: Word('властвовали', 2),
  imperativeInformal: Word('властвуй', 2),
  imperativeFormal: Word('властвуйте', 2),
  imperfect: [],
};

perfectVerbs.set(властвовать.name.text, властвовать);

export { властвовать };