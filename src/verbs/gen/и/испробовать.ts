import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испробовать: PerfectVerb = {
  name: Word('испробовать', 4),
  singular1stPerson: Word('испробую', 4),
  singular2ndPerson: Word('испробуешь', 4),
  singular3rdPerson: Word('испробует', 4),
  plural1stPerson: Word('испробуем', 4),
  plural2ndPerson: Word('испробуете', 4),
  plural3rdPerson: Word('испробуют', 4),
  masculinePast: Word('испробовал', 4),
  femininePast: Word('испробовала', 4),
  neuterPast: Word('испробовало', 4),
  pluralPast: Word('испробовали', 4),
  imperativeInformal: Word('испробуй', 4),
  imperativeFormal: Word('испробуйте', 4),
  imperfect: [],
};

perfectVerbs.set(испробовать.name.text, испробовать);

export { испробовать };