import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интервьюировать: PerfectVerb = {
  name: Word('интервьюировать', 8),
  singular1stPerson: Word('интервьюирую', 8),
  singular2ndPerson: Word('интервьюируешь', 8),
  singular3rdPerson: Word('интервьюирует', 8),
  plural1stPerson: Word('интервьюируем', 8),
  plural2ndPerson: Word('интервьюируете', 8),
  plural3rdPerson: Word('интервьюируют', 8),
  masculinePast: Word('интервьюировал', 8),
  femininePast: Word('интервьюировала', 8),
  neuterPast: Word('интервьюировало', 8),
  pluralPast: Word('интервьюировали', 8),
  imperativeInformal: Word('интервьюируй', 8),
  imperativeFormal: Word('интервьюируйте', 8),
  imperfect: [],
};

perfectVerbs.set(интервьюировать.name.text, интервьюировать);

export { интервьюировать };