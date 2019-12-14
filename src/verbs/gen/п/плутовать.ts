import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плутовать: PerfectVerb = {
  name: Word('плутовать', 6),
  singular1stPerson: Word('плутую', 4),
  singular2ndPerson: Word('плутуешь', 4),
  singular3rdPerson: Word('плутует', 4),
  plural1stPerson: Word('плутуем', 4),
  plural2ndPerson: Word('плутуете', 4),
  plural3rdPerson: Word('плутуют', 4),
  masculinePast: Word('плутовал', 6),
  femininePast: Word('плутовала', 6),
  neuterPast: Word('плутовало', 6),
  pluralPast: Word('плутовали', 6),
  imperativeInformal: Word('плутуй', 4),
  imperativeFormal: Word('плутуйте', 4),
  imperfect: [],
};

perfectVerbs.set(плутовать.name.text, плутовать);

export { плутовать };