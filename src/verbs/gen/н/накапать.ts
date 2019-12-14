import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накапать: PerfectVerb = {
  name: Word('накапать', 3),
  singular1stPerson: Word('накапаю', 3),
  singular2ndPerson: Word('накапаешь', 3),
  singular3rdPerson: Word('накапает', 3),
  plural1stPerson: Word('накапаем', 3),
  plural2ndPerson: Word('накапаете', 3),
  plural3rdPerson: Word('накапают', 3),
  masculinePast: Word('накапал', 3),
  femininePast: Word('накапала', 3),
  neuterPast: Word('накапало', 3),
  pluralPast: Word('накапали', 3),
  imperativeInformal: Word('накапай', 3),
  imperativeFormal: Word('накапайте', 3),
  imperfect: [],
};

perfectVerbs.set(накапать.name.text, накапать);

export { накапать };