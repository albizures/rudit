import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окантовать: PerfectVerb = {
  name: Word('окантовать', 7),
  singular1stPerson: Word('окантую', 5),
  singular2ndPerson: Word('окантуешь', 5),
  singular3rdPerson: Word('окантует', 5),
  plural1stPerson: Word('окантуем', 5),
  plural2ndPerson: Word('окантуете', 5),
  plural3rdPerson: Word('окантуют', 5),
  masculinePast: Word('окантовал', 7),
  femininePast: Word('окантовала', 7),
  neuterPast: Word('окантовало', 7),
  pluralPast: Word('окантовали', 7),
  imperativeInformal: Word('окантуй', 5),
  imperativeFormal: Word('окантуйте', 5),
  imperfect: [],
};

perfectVerbs.set(окантовать.name.text, окантовать);

export { окантовать };