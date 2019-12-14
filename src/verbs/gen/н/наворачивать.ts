import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наворачивать: PerfectVerb = {
  name: Word('наворачивать', 5),
  singular1stPerson: Word('наворачиваю', 5),
  singular2ndPerson: Word('наворачиваешь', 5),
  singular3rdPerson: Word('наворачивает', 5),
  plural1stPerson: Word('наворачиваем', 5),
  plural2ndPerson: Word('наворачиваете', 5),
  plural3rdPerson: Word('наворачивают', 5),
  masculinePast: Word('наворачивал', 5),
  femininePast: Word('наворачивала', 5),
  neuterPast: Word('наворачивало', 5),
  pluralPast: Word('наворачивали', 5),
  imperativeInformal: Word('наворачивай', 5),
  imperativeFormal: Word('наворачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(наворачивать.name.text, наворачивать);

export { наворачивать };