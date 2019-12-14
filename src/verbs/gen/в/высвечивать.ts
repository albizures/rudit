import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высвечивать: PerfectVerb = {
  name: Word('высвечивать', 4),
  singular1stPerson: Word('высвечиваю', 4),
  singular2ndPerson: Word('высвечиваешь', 4),
  singular3rdPerson: Word('высвечивает', 4),
  plural1stPerson: Word('высвечиваем', 4),
  plural2ndPerson: Word('высвечиваете', 4),
  plural3rdPerson: Word('высвечивают', 4),
  masculinePast: Word('высвечивал', 4),
  femininePast: Word('высвечивала', 4),
  neuterPast: Word('высвечивало', 4),
  pluralPast: Word('высвечивали', 4),
  imperativeInformal: Word('высвечивай', 4),
  imperativeFormal: Word('высвечивайте', 4),
  imperfect: [],
};

perfectVerbs.set(высвечивать.name.text, высвечивать);

export { высвечивать };