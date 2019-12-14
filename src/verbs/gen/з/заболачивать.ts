import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заболачивать: PerfectVerb = {
  name: Word('заболачивать', 5),
  singular1stPerson: Word('заболачиваю', 5),
  singular2ndPerson: Word('заболачиваешь', 5),
  singular3rdPerson: Word('заболачивает', 5),
  plural1stPerson: Word('заболачиваем', 5),
  plural2ndPerson: Word('заболачиваете', 5),
  plural3rdPerson: Word('заболачивают', 5),
  masculinePast: Word('заболачивал', 5),
  femininePast: Word('заболачивала', 5),
  neuterPast: Word('заболачивало', 5),
  pluralPast: Word('заболачивали', 5),
  imperativeInformal: Word('заболачивай', 5),
  imperativeFormal: Word('заболачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(заболачивать.name.text, заболачивать);

export { заболачивать };