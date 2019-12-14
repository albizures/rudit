import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const околпачивать: PerfectVerb = {
  name: Word('околпачивать', 5),
  singular1stPerson: Word('околпачиваю', 5),
  singular2ndPerson: Word('околпачиваешь', 5),
  singular3rdPerson: Word('околпачивает', 5),
  plural1stPerson: Word('околпачиваем', 5),
  plural2ndPerson: Word('околпачиваете', 5),
  plural3rdPerson: Word('околпачивают', 5),
  masculinePast: Word('околпачивал', 5),
  femininePast: Word('околпачивала', 5),
  neuterPast: Word('околпачивало', 5),
  pluralPast: Word('околпачивали', 5),
  imperativeInformal: Word('околпачивай', 5),
  imperativeFormal: Word('околпачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(околпачивать.name.text, околпачивать);

export { околпачивать };