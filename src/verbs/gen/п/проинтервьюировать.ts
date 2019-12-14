import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проинтервьюировать: PerfectVerb = {
  name: Word('проинтервьюировать', 11),
  singular1stPerson: Word('проинтервьюирую', 11),
  singular2ndPerson: Word('проинтервьюируешь', 11),
  singular3rdPerson: Word('проинтервьюирует', 11),
  plural1stPerson: Word('проинтервьюируем', 11),
  plural2ndPerson: Word('проинтервьюируете', 11),
  plural3rdPerson: Word('проинтервьюируют', 11),
  masculinePast: Word('проинтервьюировал', 11),
  femininePast: Word('проинтервьюировала', 11),
  neuterPast: Word('проинтервьюировало', 11),
  pluralPast: Word('проинтервьюировали', 11),
  imperativeInformal: Word('проинтервьюируй', 11),
  imperativeFormal: Word('проинтервьюируйте', 11),
  imperfect: [],
};

perfectVerbs.set(проинтервьюировать.name.text, проинтервьюировать);

export { проинтервьюировать };