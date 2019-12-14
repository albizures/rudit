import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришивать: PerfectVerb = {
  name: Word('пришивать', 6),
  singular1stPerson: Word('пришиваю', 6),
  singular2ndPerson: Word('пришиваешь', 6),
  singular3rdPerson: Word('пришивает', 6),
  plural1stPerson: Word('пришиваем', 6),
  plural2ndPerson: Word('пришиваете', 6),
  plural3rdPerson: Word('пришивают', 6),
  masculinePast: Word('пришивал', 6),
  femininePast: Word('пришивала', 6),
  neuterPast: Word('пришивало', 6),
  pluralPast: Word('пришивали', 6),
  imperativeInformal: Word('пришивай', 6),
  imperativeFormal: Word('пришивайте', 6),
  imperfect: [],
};

perfectVerbs.set(пришивать.name.text, пришивать);

export { пришивать };