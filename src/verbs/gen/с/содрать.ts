import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const содрать: PerfectVerb = {
  name: Word('содрать', 4),
  singular1stPerson: Word('сдеру', 4),
  singular2ndPerson: Word('сдерёшь', 4),
  singular3rdPerson: Word('сдерёт', 4),
  plural1stPerson: Word('сдерём', 4),
  plural2ndPerson: Word('сдерёте', 4),
  plural3rdPerson: Word('сдерут', 4),
  masculinePast: Word('содрал', 4),
  femininePast: Word('содрала', 6),
  neuterPast: Word('содрало', 4),
  pluralPast: Word('содрали', 4),
  imperativeInformal: Word('сдери', 4),
  imperativeFormal: Word('сдерите', 4),
  imperfect: [],
};

perfectVerbs.set(содрать.name.text, содрать);

export { содрать };