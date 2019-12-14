import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окоченеть: PerfectVerb = {
  name: Word('окоченеть', 6),
  singular1stPerson: Word('окоченею', 6),
  singular2ndPerson: Word('окоченеешь', 6),
  singular3rdPerson: Word('окоченеет', 6),
  plural1stPerson: Word('окоченеем', 6),
  plural2ndPerson: Word('окоченеете', 6),
  plural3rdPerson: Word('окоченеют', 6),
  masculinePast: Word('окоченел', 6),
  femininePast: Word('окоченела', 6),
  neuterPast: Word('окоченело', 6),
  pluralPast: Word('окоченели', 6),
  imperativeInformal: Word('окоченей', 6),
  imperativeFormal: Word('окоченейте', 6),
  imperfect: [],
};

perfectVerbs.set(окоченеть.name.text, окоченеть);

export { окоченеть };