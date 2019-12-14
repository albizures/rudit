import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раззванивать: PerfectVerb = {
  name: Word('раззванивать', 5),
  singular1stPerson: Word('раззваниваю', 5),
  singular2ndPerson: Word('раззваниваешь', 5),
  singular3rdPerson: Word('раззванивает', 5),
  plural1stPerson: Word('раззваниваем', 5),
  plural2ndPerson: Word('раззваниваете', 5),
  plural3rdPerson: Word('раззванивают', 5),
  masculinePast: Word('раззванивал', 5),
  femininePast: Word('раззванивала', 5),
  neuterPast: Word('раззванивало', 5),
  pluralPast: Word('раззванивали', 5),
  imperativeInformal: Word('раззванивай', 5),
  imperativeFormal: Word('раззванивайте', 5),
  imperfect: [],
};

perfectVerbs.set(раззванивать.name.text, раззванивать);

export { раззванивать };