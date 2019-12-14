import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const законопачивать: PerfectVerb = {
  name: Word('законопачивать', 7),
  singular1stPerson: Word('законопачиваю', 7),
  singular2ndPerson: Word('законопачиваешь', 7),
  singular3rdPerson: Word('законопачивает', 7),
  plural1stPerson: Word('законопачиваем', 7),
  plural2ndPerson: Word('законопачиваете', 7),
  plural3rdPerson: Word('законопачивают', 7),
  masculinePast: Word('законопачивал', 7),
  femininePast: Word('законопачивала', 7),
  neuterPast: Word('законопачивало', 7),
  pluralPast: Word('законопачивали', 7),
  imperativeInformal: Word('законопачивай', 7),
  imperativeFormal: Word('законопачивайте', 7),
  imperfect: [],
};

perfectVerbs.set(законопачивать.name.text, законопачивать);

export { законопачивать };