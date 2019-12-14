import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокручивать: PerfectVerb = {
  name: Word('прокручивать', 5),
  singular1stPerson: Word('прокручиваю', 5),
  singular2ndPerson: Word('прокручиваешь', 5),
  singular3rdPerson: Word('прокручивает', 5),
  plural1stPerson: Word('прокручиваем', 5),
  plural2ndPerson: Word('прокручиваете', 5),
  plural3rdPerson: Word('прокручивают', 5),
  masculinePast: Word('прокручивал', 5),
  femininePast: Word('прокручивала', 5),
  neuterPast: Word('прокручивало', 5),
  pluralPast: Word('прокручивали', 5),
  imperativeInformal: Word('прокручивай', 5),
  imperativeFormal: Word('прокручивайте', 5),
  imperfect: [],
};

perfectVerbs.set(прокручивать.name.text, прокручивать);

export { прокручивать };