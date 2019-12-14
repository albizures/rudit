import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const содрогаться: PerfectVerb = {
  name: Word('содрогаться', 6),
  singular1stPerson: Word('содрогаюсь', 6),
  singular2ndPerson: Word('содрогаешься', 6),
  singular3rdPerson: Word('содрогается', 6),
  plural1stPerson: Word('содрогаемся', 6),
  plural2ndPerson: Word('содрогаетесь', 6),
  plural3rdPerson: Word('содрогаются', 6),
  masculinePast: Word('содрогался', 6),
  femininePast: Word('содрогалась', 6),
  neuterPast: Word('содрогалось', 6),
  pluralPast: Word('содрогались', 6),
  imperativeInformal: Word('содрогайся', 6),
  imperativeFormal: Word('содрогайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(содрогаться.name.text, содрогаться);

export { содрогаться };