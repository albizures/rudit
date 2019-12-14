import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const последовать: PerfectVerb = {
  name: Word('последовать', 4),
  singular1stPerson: Word('последую', 4),
  singular2ndPerson: Word('последуешь', 4),
  singular3rdPerson: Word('последует', 4),
  plural1stPerson: Word('последуем', 4),
  plural2ndPerson: Word('последуете', 4),
  plural3rdPerson: Word('последуют', 4),
  masculinePast: Word('последовал', 4),
  femininePast: Word('последовала', 4),
  neuterPast: Word('последовало', 4),
  pluralPast: Word('последовали', 4),
  imperativeInformal: Word('последуй', 4),
  imperativeFormal: Word('последуйте', 4),
  imperfect: ['следовать'],
};

perfectVerbs.set(последовать.name.text, последовать);

export { последовать };