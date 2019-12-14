import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывести: PerfectVerb = {
  name: Word('вывести', 1),
  singular1stPerson: Word('выведу', 1),
  singular2ndPerson: Word('выведешь', 1),
  singular3rdPerson: Word('выведет', 1),
  plural1stPerson: Word('выведем', 1),
  plural2ndPerson: Word('выведете', 1),
  plural3rdPerson: Word('выведут', 1),
  masculinePast: Word('вывел', 1),
  femininePast: Word('вывела', 1),
  neuterPast: Word('вывело', 1),
  pluralPast: Word('вывели', 1),
  imperativeInformal: Word('выведи', 1),
  imperativeFormal: Word('выведите', 1),
  imperfect: ['выводить'],
};

perfectVerbs.set(вывести.name.text, вывести);

export { вывести };