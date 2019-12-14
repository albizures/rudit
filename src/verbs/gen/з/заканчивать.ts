import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заканчивать: PerfectVerb = {
  name: Word('заканчивать', 3),
  singular1stPerson: Word('заканчиваю', 3),
  singular2ndPerson: Word('заканчиваешь', 3),
  singular3rdPerson: Word('заканчивает', 3),
  plural1stPerson: Word('заканчиваем', 3),
  plural2ndPerson: Word('заканчиваете', 3),
  plural3rdPerson: Word('заканчивают', 3),
  masculinePast: Word('заканчивал', 3),
  femininePast: Word('заканчивала', 3),
  neuterPast: Word('заканчивало', 3),
  pluralPast: Word('заканчивали', 3),
  imperativeInformal: Word('заканчивай', 3),
  imperativeFormal: Word('заканчивайте', 3),
  imperfect: ['закончить'],
};

perfectVerbs.set(заканчивать.name.text, заканчивать);

export { заканчивать };