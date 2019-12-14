import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одёргивать: PerfectVerb = {
  name: Word('одёргивать', 2),
  singular1stPerson: Word('одёргиваю', 2),
  singular2ndPerson: Word('одёргиваешь', 2),
  singular3rdPerson: Word('одёргивает', 2),
  plural1stPerson: Word('одёргиваем', 2),
  plural2ndPerson: Word('одёргиваете', 2),
  plural3rdPerson: Word('одёргивают', 2),
  masculinePast: Word('одёргивал', 2),
  femininePast: Word('одёргивала', 2),
  neuterPast: Word('одёргивало', 2),
  pluralPast: Word('одёргивали', 2),
  imperativeInformal: Word('одёргивай', 2),
  imperativeFormal: Word('одёргивайте', 2),
  imperfect: [],
};

perfectVerbs.set(одёргивать.name.text, одёргивать);

export { одёргивать };