import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const включать: PerfectVerb = {
  name: Word('включать', 5),
  singular1stPerson: Word('включаю', 5),
  singular2ndPerson: Word('включаешь', 5),
  singular3rdPerson: Word('включает', 5),
  plural1stPerson: Word('включаем', 5),
  plural2ndPerson: Word('включаете', 5),
  plural3rdPerson: Word('включают', 5),
  masculinePast: Word('включал', 5),
  femininePast: Word('включала', 5),
  neuterPast: Word('включало', 5),
  pluralPast: Word('включали', 5),
  imperativeInformal: Word('включай', 5),
  imperativeFormal: Word('включайте', 5),
  imperfect: ['включить'],
};

perfectVerbs.set(включать.name.text, включать);

export { включать };