import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навьючивать: PerfectVerb = {
  name: Word('навьючивать', 4),
  singular1stPerson: Word('навьючиваю', 4),
  singular2ndPerson: Word('навьючиваешь', 4),
  singular3rdPerson: Word('навьючивает', 4),
  plural1stPerson: Word('навьючиваем', 4),
  plural2ndPerson: Word('навьючиваете', 4),
  plural3rdPerson: Word('навьючивают', 4),
  masculinePast: Word('навьючивал', 4),
  femininePast: Word('навьючивала', 4),
  neuterPast: Word('навьючивало', 4),
  pluralPast: Word('навьючивали', 4),
  imperativeInformal: Word('навьючивай', 4),
  imperativeFormal: Word('навьючивайте', 4),
  imperfect: [],
};

perfectVerbs.set(навьючивать.name.text, навьючивать);

export { навьючивать };