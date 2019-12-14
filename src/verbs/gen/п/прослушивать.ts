import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослушивать: PerfectVerb = {
  name: Word('прослушивать', 5),
  singular1stPerson: Word('прослушиваю', 5),
  singular2ndPerson: Word('прослушиваешь', 5),
  singular3rdPerson: Word('прослушивает', 5),
  plural1stPerson: Word('прослушиваем', 5),
  plural2ndPerson: Word('прослушиваете', 5),
  plural3rdPerson: Word('прослушивают', 5),
  masculinePast: Word('прослушивал', 5),
  femininePast: Word('прослушивала', 5),
  neuterPast: Word('прослушивало', 5),
  pluralPast: Word('прослушивали', 5),
  imperativeInformal: Word('прослушивай', 5),
  imperativeFormal: Word('прослушивайте', 5),
  imperfect: ['прослушать'],
};

perfectVerbs.set(прослушивать.name.text, прослушивать);

export { прослушивать };