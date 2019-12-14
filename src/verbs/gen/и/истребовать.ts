import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истребовать: PerfectVerb = {
  name: Word('истребовать', 4),
  singular1stPerson: Word('истребую', 4),
  singular2ndPerson: Word('истребуешь', 4),
  singular3rdPerson: Word('истребует', 4),
  plural1stPerson: Word('истребуем', 4),
  plural2ndPerson: Word('истребуете', 4),
  plural3rdPerson: Word('истребуют', 4),
  masculinePast: Word('истребовал', 4),
  femininePast: Word('истребовала', 4),
  neuterPast: Word('истребовало', 4),
  pluralPast: Word('истребовали', 4),
  imperativeInformal: Word('истребуй', 4),
  imperativeFormal: Word('истребуйте', 4),
  imperfect: [],
};

perfectVerbs.set(истребовать.name.text, истребовать);

export { истребовать };