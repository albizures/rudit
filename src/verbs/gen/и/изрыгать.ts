import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрыгать: PerfectVerb = {
  name: Word('изрыгать', 5),
  singular1stPerson: Word('изрыгаю', 5),
  singular2ndPerson: Word('изрыгаешь', 5),
  singular3rdPerson: Word('изрыгает', 5),
  plural1stPerson: Word('изрыгаем', 5),
  plural2ndPerson: Word('изрыгаете', 5),
  plural3rdPerson: Word('изрыгают', 5),
  masculinePast: Word('изрыгал', 5),
  femininePast: Word('изрыгала', 5),
  neuterPast: Word('изрыгало', 5),
  pluralPast: Word('изрыгали', 5),
  imperativeInformal: Word('изрыгай', 5),
  imperativeFormal: Word('изрыгайте', 5),
  imperfect: [],
};

perfectVerbs.set(изрыгать.name.text, изрыгать);

export { изрыгать };