import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const содеять: PerfectVerb = {
  name: Word('содеять', 3),
  singular1stPerson: Word('содею', 3),
  singular2ndPerson: Word('содеешь', 3),
  singular3rdPerson: Word('содеет', 3),
  plural1stPerson: Word('содеем', 3),
  plural2ndPerson: Word('содеете', 3),
  plural3rdPerson: Word('содеют', 3),
  masculinePast: Word('содеял', 3),
  femininePast: Word('содеяла', 3),
  neuterPast: Word('содеяло', 3),
  pluralPast: Word('содеяли', 3),
  imperativeInformal: Word('содей', 3),
  imperativeFormal: Word('содейте', 3),
  imperfect: [],
};

perfectVerbs.set(содеять.name.text, содеять);

export { содеять };