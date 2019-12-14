import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принестись: PerfectVerb = {
  name: Word('принестись', 7),
  singular1stPerson: Word('принесусь', 6),
  singular2ndPerson: Word('принесёшься', 4),
  singular3rdPerson: Word('принесётся', 4),
  plural1stPerson: Word('принесёмся', 4),
  plural2ndPerson: Word('принесётесь', 4),
  plural3rdPerson: Word('принесутся', 6),
  masculinePast: Word('принёсся', 2),
  femininePast: Word('принеслась', 7),
  neuterPast: Word('принеслось', 7),
  pluralPast: Word('принеслись', 7),
  imperativeInformal: Word('принесись', 6),
  imperativeFormal: Word('принеситесь', 6),
  imperfect: [],
};

perfectVerbs.set(принестись.name.text, принестись);

export { принестись };