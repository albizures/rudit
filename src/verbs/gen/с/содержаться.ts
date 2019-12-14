import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const содержаться: PerfectVerb = {
  name: Word('содержаться', 6),
  singular1stPerson: Word('содержусь', 6),
  singular2ndPerson: Word('содержишься', 3),
  singular3rdPerson: Word('содержится', 3),
  plural1stPerson: Word('содержимся', 3),
  plural2ndPerson: Word('содержитесь', 3),
  plural3rdPerson: Word('содержатся', 3),
  masculinePast: Word('содержался', 6),
  femininePast: Word('содержалась', 6),
  neuterPast: Word('содержалось', 6),
  pluralPast: Word('содержались', 6),
  imperativeInformal: Word('содержись', 6),
  imperativeFormal: Word('содержитесь', 6),
  imperfect: [],
};

perfectVerbs.set(содержаться.name.text, содержаться);

export { содержаться };