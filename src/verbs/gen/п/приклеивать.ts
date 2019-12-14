import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приклеивать: PerfectVerb = {
  name: Word('приклеивать', 5),
  singular1stPerson: Word('приклеиваю', 5),
  singular2ndPerson: Word('приклеиваешь', 5),
  singular3rdPerson: Word('приклеивает', 5),
  plural1stPerson: Word('приклеиваем', 5),
  plural2ndPerson: Word('приклеиваете', 5),
  plural3rdPerson: Word('приклеивают', 5),
  masculinePast: Word('приклеивал', 5),
  femininePast: Word('приклеивала', 5),
  neuterPast: Word('приклеивало', 5),
  pluralPast: Word('приклеивали', 5),
  imperativeInformal: Word('приклеивай', 5),
  imperativeFormal: Word('приклеивайте', 5),
  imperfect: [],
};

perfectVerbs.set(приклеивать.name.text, приклеивать);

export { приклеивать };