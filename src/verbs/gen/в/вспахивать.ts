import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспахивать: PerfectVerb = {
  name: Word('вспахивать', 3),
  singular1stPerson: Word('вспахиваю', 3),
  singular2ndPerson: Word('вспахиваешь', 3),
  singular3rdPerson: Word('вспахивает', 3),
  plural1stPerson: Word('вспахиваем', 3),
  plural2ndPerson: Word('вспахиваете', 3),
  plural3rdPerson: Word('вспахивают', 3),
  masculinePast: Word('вспахивал', 3),
  femininePast: Word('вспахивала', 3),
  neuterPast: Word('вспахивало', 3),
  pluralPast: Word('вспахивали', 3),
  imperativeInformal: Word('вспахивай', 3),
  imperativeFormal: Word('вспахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вспахивать.name.text, вспахивать);

export { вспахивать };