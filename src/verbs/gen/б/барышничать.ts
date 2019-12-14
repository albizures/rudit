import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const барышничать: PerfectVerb = {
  name: Word('барышничать', 3),
  singular1stPerson: Word('барышничаю', 3),
  singular2ndPerson: Word('барышничаешь', 3),
  singular3rdPerson: Word('барышничает', 3),
  plural1stPerson: Word('барышничаем', 3),
  plural2ndPerson: Word('барышничаете', 3),
  plural3rdPerson: Word('барышничают', 3),
  masculinePast: Word('барышничал', 3),
  femininePast: Word('барышничала', 3),
  neuterPast: Word('барышничало', 3),
  pluralPast: Word('барышничали', 3),
  imperativeInformal: Word('барышничай', 3),
  imperativeFormal: Word('барышничайте', 3),
  imperfect: [],
};

perfectVerbs.set(барышничать.name.text, барышничать);

export { барышничать };