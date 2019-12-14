import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацапать: PerfectVerb = {
  name: Word('зацапать', 3),
  singular1stPerson: Word('зацапаю', 3),
  singular2ndPerson: Word('зацапаешь', 3),
  singular3rdPerson: Word('зацапает', 3),
  plural1stPerson: Word('зацапаем', 3),
  plural2ndPerson: Word('зацапаете', 3),
  plural3rdPerson: Word('зацапают', 3),
  masculinePast: Word('зацапал', 3),
  femininePast: Word('зацапала', 3),
  neuterPast: Word('зацапало', 3),
  pluralPast: Word('зацапали', 3),
  imperativeInformal: Word('зацапай', 3),
  imperativeFormal: Word('зацапайте', 3),
  imperfect: [],
};

perfectVerbs.set(зацапать.name.text, зацапать);

export { зацапать };