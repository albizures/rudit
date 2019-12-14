import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const каркать: PerfectVerb = {
  name: Word('каркать', 1),
  singular1stPerson: Word('каркаю', 1),
  singular2ndPerson: Word('каркаешь', 1),
  singular3rdPerson: Word('каркает', 1),
  plural1stPerson: Word('каркаем', 1),
  plural2ndPerson: Word('каркаете', 1),
  plural3rdPerson: Word('каркают', 1),
  masculinePast: Word('каркал', 1),
  femininePast: Word('каркала', 1),
  neuterPast: Word('каркало', 1),
  pluralPast: Word('каркали', 1),
  imperativeInformal: Word('каркай', 1),
  imperativeFormal: Word('каркайте', 1),
  imperfect: [],
};

perfectVerbs.set(каркать.name.text, каркать);

export { каркать };