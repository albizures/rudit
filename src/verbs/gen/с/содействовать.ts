import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const содействовать: PerfectVerb = {
  name: Word('содействовать', 3),
  singular1stPerson: Word('содействую', 3),
  singular2ndPerson: Word('содействуешь', 3),
  singular3rdPerson: Word('содействует', 3),
  plural1stPerson: Word('содействуем', 3),
  plural2ndPerson: Word('содействуете', 3),
  plural3rdPerson: Word('содействуют', 3),
  masculinePast: Word('содействовал', 3),
  femininePast: Word('содействовала', 3),
  neuterPast: Word('содействовало', 3),
  pluralPast: Word('содействовали', 3),
  imperativeInformal: Word('содействуй', 3),
  imperativeFormal: Word('содействуйте', 3),
  imperfect: ['посодействовать'],
};

perfectVerbs.set(содействовать.name.text, содействовать);

export { содействовать };