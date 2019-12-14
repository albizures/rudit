import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполаскивать: PerfectVerb = {
  name: Word('заполаскивать', 5),
  singular1stPerson: Word('заполаскиваю', 5),
  singular2ndPerson: Word('заполаскиваешь', 5),
  singular3rdPerson: Word('заполаскивает', 5),
  plural1stPerson: Word('заполаскиваем', 5),
  plural2ndPerson: Word('заполаскиваете', 5),
  plural3rdPerson: Word('заполаскивают', 5),
  masculinePast: Word('заполаскивал', 5),
  femininePast: Word('заполаскивала', 5),
  neuterPast: Word('заполаскивало', 5),
  pluralPast: Word('заполаскивали', 5),
  imperativeInformal: Word('заполаскивай', 5),
  imperativeFormal: Word('заполаскивайте', 5),
  imperfect: [],
};

perfectVerbs.set(заполаскивать.name.text, заполаскивать);

export { заполаскивать };