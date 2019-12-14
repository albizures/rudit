import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смачивать: PerfectVerb = {
  name: Word('смачивать', 2),
  singular1stPerson: Word('смачиваю', 2),
  singular2ndPerson: Word('смачиваешь', 2),
  singular3rdPerson: Word('смачивает', 2),
  plural1stPerson: Word('смачиваем', 2),
  plural2ndPerson: Word('смачиваете', 2),
  plural3rdPerson: Word('смачивают', 2),
  masculinePast: Word('смачивал', 2),
  femininePast: Word('смачивала', 2),
  neuterPast: Word('смачивало', 2),
  pluralPast: Word('смачивали', 2),
  imperativeInformal: Word('смачивай', 2),
  imperativeFormal: Word('смачивайте', 2),
  imperfect: [],
};

perfectVerbs.set(смачивать.name.text, смачивать);

export { смачивать };