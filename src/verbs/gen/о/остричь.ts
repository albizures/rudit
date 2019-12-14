import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остричь: PerfectVerb = {
  name: Word('остричь', 4),
  singular1stPerson: Word('остригу', 6),
  singular2ndPerson: Word('острижёшь', 4),
  singular3rdPerson: Word('острижёт', 4),
  plural1stPerson: Word('острижём', 4),
  plural2ndPerson: Word('острижёте', 8),
  plural3rdPerson: Word('остригут', 6),
  masculinePast: Word('остриг', 4),
  femininePast: Word('остригла', 4),
  neuterPast: Word('остригло', 4),
  pluralPast: Word('остригли', 4),
  imperativeInformal: Word('остриги', 6),
  imperativeFormal: Word('остригите', 6),
  imperfect: [],
};

perfectVerbs.set(остричь.name.text, остричь);

export { остричь };