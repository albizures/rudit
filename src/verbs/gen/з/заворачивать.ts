import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заворачивать: PerfectVerb = {
  name: Word('заворачивать', 5),
  singular1stPerson: Word('заворачиваю', 5),
  singular2ndPerson: Word('заворачиваешь', 5),
  singular3rdPerson: Word('заворачивает', 5),
  plural1stPerson: Word('заворачиваем', 5),
  plural2ndPerson: Word('заворачиваете', 5),
  plural3rdPerson: Word('заворачивают', 5),
  masculinePast: Word('заворачивал', 5),
  femininePast: Word('заворачивала', 5),
  neuterPast: Word('заворачивало', 5),
  pluralPast: Word('заворачивали', 5),
  imperativeInformal: Word('заворачивай', 5),
  imperativeFormal: Word('заворачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(заворачивать.name.text, заворачивать);

export { заворачивать };