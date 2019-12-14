import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окостенеть: PerfectVerb = {
  name: Word('окостенеть', 7),
  singular1stPerson: Word('окостенею', 7),
  singular2ndPerson: Word('окостенеешь', 7),
  singular3rdPerson: Word('окостенеет', 7),
  plural1stPerson: Word('окостенеем', 7),
  plural2ndPerson: Word('окостенеете', 7),
  plural3rdPerson: Word('окостенеют', 7),
  masculinePast: Word('окостенел', 7),
  femininePast: Word('окостенела', 7),
  neuterPast: Word('окостенело', 7),
  pluralPast: Word('окостенели', 7),
  imperativeInformal: Word('окостеней', 7),
  imperativeFormal: Word('окостенейте', 7),
  imperfect: [],
};

perfectVerbs.set(окостенеть.name.text, окостенеть);

export { окостенеть };