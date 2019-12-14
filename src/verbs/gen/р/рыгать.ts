import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыгать: PerfectVerb = {
  name: Word('рыгать', 3),
  singular1stPerson: Word('рыгаю', 3),
  singular2ndPerson: Word('рыгаешь', 3),
  singular3rdPerson: Word('рыгает', 3),
  plural1stPerson: Word('рыгаем', 3),
  plural2ndPerson: Word('рыгаете', 3),
  plural3rdPerson: Word('рыгают', 3),
  masculinePast: Word('рыгал', 3),
  femininePast: Word('рыгала', 3),
  neuterPast: Word('рыгало', 3),
  pluralPast: Word('рыгали', 3),
  imperativeInformal: Word('рыгай', 3),
  imperativeFormal: Word('рыгайте', 3),
  imperfect: ['рыгнуть'],
};

perfectVerbs.set(рыгать.name.text, рыгать);

export { рыгать };