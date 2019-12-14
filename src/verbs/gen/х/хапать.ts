import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хапать: PerfectVerb = {
  name: Word('хапать', 1),
  singular1stPerson: Word('хапаю', 1),
  singular2ndPerson: Word('хапаешь', 1),
  singular3rdPerson: Word('хапает', 1),
  plural1stPerson: Word('хапаем', 1),
  plural2ndPerson: Word('хапаете', 1),
  plural3rdPerson: Word('хапают', 1),
  masculinePast: Word('хапал', 1),
  femininePast: Word('хапала', 1),
  neuterPast: Word('хапало', 1),
  pluralPast: Word('хапали', 1),
  imperativeInformal: Word('хапай', 1),
  imperativeFormal: Word('хапайте', 1),
  imperfect: [],
};

perfectVerbs.set(хапать.name.text, хапать);

export { хапать };