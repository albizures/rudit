import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остричь: PerfectVerb = {
  name: Word('остричь', 4),
  singular1stPerson: Word('остригу', 6),
  singular2ndPerson: Word('острижёшь', 6),
  singular3rdPerson: Word('острижёт', 6),
  plural1stPerson: Word('острижём', 6),
  plural2ndPerson: Word('острижёте', 6),
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