import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замереть: PerfectVerb = {
  name: Word('замереть', 5),
  singular1stPerson: Word('замру', 4),
  singular2ndPerson: Word('замрёшь', 1),
  singular3rdPerson: Word('замрёт', 1),
  plural1stPerson: Word('замрём', 1),
  plural2ndPerson: Word('замрёте', 1),
  plural3rdPerson: Word('замрут', 4),
  masculinePast: Word('замер', 1),
  femininePast: Word('замерла', 1),
  neuterPast: Word('замерло', 1),
  pluralPast: Word('замерли', 1),
  imperativeInformal: Word('замри', 4),
  imperativeFormal: Word('замрите', 4),
  imperfect: ['замирать'],
};

perfectVerbs.set(замереть.name.text, замереть);

export { замереть };