import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const миновать: PerfectVerb = {
  name: Word('миновать', 5),
  singular1stPerson: Word('миную', 3),
  singular2ndPerson: Word('минуешь', 3),
  singular3rdPerson: Word('минует', 3),
  plural1stPerson: Word('минуем', 3),
  plural2ndPerson: Word('минуете', 3),
  plural3rdPerson: Word('минуют', 3),
  masculinePast: Word('миновал', 5),
  femininePast: Word('миновала', 5),
  neuterPast: Word('миновало', 5),
  pluralPast: Word('миновали', 5),
  imperativeInformal: Word('минуй', 3),
  imperativeFormal: Word('минуйте', 3),
  imperfect: ['минуть'],
};

perfectVerbs.set(миновать.name.text, миновать);

export { миновать };