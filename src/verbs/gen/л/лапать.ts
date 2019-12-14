import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лапать: PerfectVerb = {
  name: Word('лапать', 1),
  singular1stPerson: Word('лапаю', 1),
  singular2ndPerson: Word('лапаешь', 1),
  singular3rdPerson: Word('лапает', 1),
  plural1stPerson: Word('лапаем', 1),
  plural2ndPerson: Word('лапаете', 1),
  plural3rdPerson: Word('лапают', 1),
  masculinePast: Word('лапал', 1),
  femininePast: Word('лапала', 1),
  neuterPast: Word('лапало', 1),
  pluralPast: Word('лапали', 1),
  imperativeInformal: Word('лапай', 1),
  imperativeFormal: Word('лапайте', 1),
  imperfect: [],
};

perfectVerbs.set(лапать.name.text, лапать);

export { лапать };