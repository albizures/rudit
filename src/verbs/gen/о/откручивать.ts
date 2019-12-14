import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откручивать: PerfectVerb = {
  name: Word('откручивать', 4),
  singular1stPerson: Word('откручиваю', 4),
  singular2ndPerson: Word('откручиваешь', 4),
  singular3rdPerson: Word('откручивает', 4),
  plural1stPerson: Word('откручиваем', 4),
  plural2ndPerson: Word('откручиваете', 4),
  plural3rdPerson: Word('откручивают', 4),
  masculinePast: Word('откручивал', 4),
  femininePast: Word('откручивала', 4),
  neuterPast: Word('откручивало', 4),
  pluralPast: Word('откручивали', 4),
  imperativeInformal: Word('откручивай', 4),
  imperativeFormal: Word('откручивайте', 4),
  imperfect: [],
};

perfectVerbs.set(откручивать.name.text, откручивать);

export { откручивать };