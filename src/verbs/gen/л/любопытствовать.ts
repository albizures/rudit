import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const любопытствовать: PerfectVerb = {
  name: Word('любопытствовать', 5),
  singular1stPerson: Word('любопытствую', 5),
  singular2ndPerson: Word('любопытствуешь', 5),
  singular3rdPerson: Word('любопытствует', 5),
  plural1stPerson: Word('любопытствуем', 5),
  plural2ndPerson: Word('любопытствуете', 5),
  plural3rdPerson: Word('любопытствуют', 5),
  masculinePast: Word('любопытствовал', 5),
  femininePast: Word('любопытствовала', 5),
  neuterPast: Word('любопытствовало', 5),
  pluralPast: Word('любопытствовали', 5),
  imperativeInformal: Word('любопытствуй', 5),
  imperativeFormal: Word('любопытствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(любопытствовать.name.text, любопытствовать);

export { любопытствовать };