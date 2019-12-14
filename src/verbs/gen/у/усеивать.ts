import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усеивать: PerfectVerb = {
  name: Word('усеивать', 2),
  singular1stPerson: Word('усеиваю', 2),
  singular2ndPerson: Word('усеиваешь', 2),
  singular3rdPerson: Word('усеивает', 2),
  plural1stPerson: Word('усеиваем', 2),
  plural2ndPerson: Word('усеиваете', 2),
  plural3rdPerson: Word('усеивают', 2),
  masculinePast: Word('усеивал', 2),
  femininePast: Word('усеивала', 2),
  neuterPast: Word('усеивало', 2),
  pluralPast: Word('усеивали', 2),
  imperativeInformal: Word('усеивай', 2),
  imperativeFormal: Word('усеивайте', 2),
  imperfect: [],
};

perfectVerbs.set(усеивать.name.text, усеивать);

export { усеивать };