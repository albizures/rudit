import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завивать: PerfectVerb = {
  name: Word('завивать', 5),
  singular1stPerson: Word('завиваю', 5),
  singular2ndPerson: Word('завиваешь', 5),
  singular3rdPerson: Word('завивает', 5),
  plural1stPerson: Word('завиваем', 5),
  plural2ndPerson: Word('завиваете', 5),
  plural3rdPerson: Word('завивают', 5),
  masculinePast: Word('завивал', 5),
  femininePast: Word('завивала', 5),
  neuterPast: Word('завивало', 5),
  pluralPast: Word('завивали', 5),
  imperativeInformal: Word('завивай', 5),
  imperativeFormal: Word('завивайте', 5),
  imperfect: [],
};

perfectVerbs.set(завивать.name.text, завивать);

export { завивать };