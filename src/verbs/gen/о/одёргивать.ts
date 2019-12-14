import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одёргивать: PerfectVerb = {
  name: Word('одёргивать', 7),
  singular1stPerson: Word('одёргиваю', 7),
  singular2ndPerson: Word('одёргиваешь', 7),
  singular3rdPerson: Word('одёргивает', 7),
  plural1stPerson: Word('одёргиваем', 7),
  plural2ndPerson: Word('одёргиваете', 7),
  plural3rdPerson: Word('одёргивают', 7),
  masculinePast: Word('одёргивал', 7),
  femininePast: Word('одёргивала', 7),
  neuterPast: Word('одёргивало', 7),
  pluralPast: Word('одёргивали', 7),
  imperativeInformal: Word('одёргивай', 7),
  imperativeFormal: Word('одёргивайте', 7),
  imperfect: [],
};

perfectVerbs.set(одёргивать.name.text, одёргивать);

export { одёргивать };