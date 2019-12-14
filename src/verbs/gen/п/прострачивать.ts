import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прострачивать: PerfectVerb = {
  name: Word('прострачивать', 6),
  singular1stPerson: Word('прострачиваю', 6),
  singular2ndPerson: Word('прострачиваешь', 6),
  singular3rdPerson: Word('прострачивает', 6),
  plural1stPerson: Word('прострачиваем', 6),
  plural2ndPerson: Word('прострачиваете', 6),
  plural3rdPerson: Word('прострачивают', 6),
  masculinePast: Word('прострачивал', 6),
  femininePast: Word('прострачивала', 6),
  neuterPast: Word('прострачивало', 6),
  pluralPast: Word('прострачивали', 6),
  imperativeInformal: Word('прострачивай', 6),
  imperativeFormal: Word('прострачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(прострачивать.name.text, прострачивать);

export { прострачивать };