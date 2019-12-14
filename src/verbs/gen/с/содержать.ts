import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const содержать: PerfectVerb = {
  name: Word('содержать', 6),
  singular1stPerson: Word('содержу', 6),
  singular2ndPerson: Word('содержишь', 3),
  singular3rdPerson: Word('содержит', 3),
  plural1stPerson: Word('содержим', 3),
  plural2ndPerson: Word('содержите', 3),
  plural3rdPerson: Word('содержат', 3),
  masculinePast: Word('содержал', 6),
  femininePast: Word('содержала', 6),
  neuterPast: Word('содержало', 6),
  pluralPast: Word('содержали', 6),
  imperativeInformal: Word('содержи', 6),
  imperativeFormal: Word('содержите', 6),
  imperfect: [],
};

perfectVerbs.set(содержать.name.text, содержать);

export { содержать };