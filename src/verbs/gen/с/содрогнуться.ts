import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const содрогнуться: PerfectVerb = {
  name: Word('содрогнуться', 7),
  singular1stPerson: Word('содрогнусь', 7),
  singular2ndPerson: Word('содрогнёшься', 7),
  singular3rdPerson: Word('содрогнётся', 7),
  plural1stPerson: Word('содрогнёмся', 7),
  plural2ndPerson: Word('содрогнётесь', 7),
  plural3rdPerson: Word('содрогнутся', 7),
  masculinePast: Word('содрогнулся', 7),
  femininePast: Word('содрогнулась', 7),
  neuterPast: Word('содрогнулось', 7),
  pluralPast: Word('содрогнулись', 7),
  imperativeInformal: Word('содрогнись', 7),
  imperativeFormal: Word('содрогнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(содрогнуться.name.text, содрогнуться);

export { содрогнуться };