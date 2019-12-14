import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикручивать: PerfectVerb = {
  name: Word('прикручивать', 5),
  singular1stPerson: Word('прикручиваю', 5),
  singular2ndPerson: Word('прикручиваешь', 5),
  singular3rdPerson: Word('прикручивает', 5),
  plural1stPerson: Word('прикручиваем', 5),
  plural2ndPerson: Word('прикручиваете', 5),
  plural3rdPerson: Word('прикручивают', 5),
  masculinePast: Word('прикручивал', 5),
  femininePast: Word('прикручивала', 5),
  neuterPast: Word('прикручивало', 5),
  pluralPast: Word('прикручивали', 5),
  imperativeInformal: Word('прикручивай', 5),
  imperativeFormal: Word('прикручивайте', 5),
  imperfect: [],
};

perfectVerbs.set(прикручивать.name.text, прикручивать);

export { прикручивать };