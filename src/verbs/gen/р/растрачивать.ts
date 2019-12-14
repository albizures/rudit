import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрачивать: PerfectVerb = {
  name: Word('растрачивать', 5),
  singular1stPerson: Word('растрачиваю', 5),
  singular2ndPerson: Word('растрачиваешь', 5),
  singular3rdPerson: Word('растрачивает', 5),
  plural1stPerson: Word('растрачиваем', 5),
  plural2ndPerson: Word('растрачиваете', 5),
  plural3rdPerson: Word('растрачивают', 5),
  masculinePast: Word('растрачивал', 5),
  femininePast: Word('растрачивала', 5),
  neuterPast: Word('растрачивало', 5),
  pluralPast: Word('растрачивали', 5),
  imperativeInformal: Word('растрачивай', 5),
  imperativeFormal: Word('растрачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(растрачивать.name.text, растрачивать);

export { растрачивать };