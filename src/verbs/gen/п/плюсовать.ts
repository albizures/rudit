import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плюсовать: PerfectVerb = {
  name: Word('плюсовать', 6),
  singular1stPerson: Word('плюсую', 4),
  singular2ndPerson: Word('плюсуешь', 4),
  singular3rdPerson: Word('плюсует', 4),
  plural1stPerson: Word('плюсуем', 4),
  plural2ndPerson: Word('плюсуете', 4),
  plural3rdPerson: Word('плюсуют', 4),
  masculinePast: Word('плюсовал', 6),
  femininePast: Word('плюсовала', 6),
  neuterPast: Word('плюсовало', 6),
  pluralPast: Word('плюсовали', 6),
  imperativeInformal: Word('плюсуй', 4),
  imperativeFormal: Word('плюсуйте', 4),
  imperfect: [],
};

perfectVerbs.set(плюсовать.name.text, плюсовать);

export { плюсовать };