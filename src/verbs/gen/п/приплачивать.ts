import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплачивать: PerfectVerb = {
  name: Word('приплачивать', 5),
  singular1stPerson: Word('приплачиваю', 5),
  singular2ndPerson: Word('приплачиваешь', 5),
  singular3rdPerson: Word('приплачивает', 5),
  plural1stPerson: Word('приплачиваем', 5),
  plural2ndPerson: Word('приплачиваете', 5),
  plural3rdPerson: Word('приплачивают', 5),
  masculinePast: Word('приплачивал', 5),
  femininePast: Word('приплачивала', 5),
  neuterPast: Word('приплачивало', 5),
  pluralPast: Word('приплачивали', 5),
  imperativeInformal: Word('приплачивай', 5),
  imperativeFormal: Word('приплачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(приплачивать.name.text, приплачивать);

export { приплачивать };