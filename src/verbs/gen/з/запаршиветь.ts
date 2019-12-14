import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаршиветь: PerfectVerb = {
  name: Word('запаршиветь', 6),
  singular1stPerson: Word('запаршивею', 6),
  singular2ndPerson: Word('запаршивеешь', 6),
  singular3rdPerson: Word('запаршивеет', 6),
  plural1stPerson: Word('запаршивеем', 6),
  plural2ndPerson: Word('запаршивеете', 6),
  plural3rdPerson: Word('запаршивеют', 6),
  masculinePast: Word('запаршивел', 6),
  femininePast: Word('запаршивела', 6),
  neuterPast: Word('запаршивело', 6),
  pluralPast: Word('запаршивели', 6),
  imperativeInformal: Word('запаршивей', 6),
  imperativeFormal: Word('запаршивейте', 6),
  imperfect: [],
};

perfectVerbs.set(запаршиветь.name.text, запаршиветь);

export { запаршиветь };