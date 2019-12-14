import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахаркать: PerfectVerb = {
  name: Word('нахаркать', 3),
  singular1stPerson: Word('нахаркаю', 3),
  singular2ndPerson: Word('нахаркаешь', 3),
  singular3rdPerson: Word('нахаркает', 3),
  plural1stPerson: Word('нахаркаем', 3),
  plural2ndPerson: Word('нахаркаете', 3),
  plural3rdPerson: Word('нахаркают', 3),
  masculinePast: Word('нахаркал', 3),
  femininePast: Word('нахаркала', 3),
  neuterPast: Word('нахаркало', 3),
  pluralPast: Word('нахаркали', 3),
  imperativeInformal: Word('нахаркай', 3),
  imperativeFormal: Word('нахаркайте', 3),
  imperfect: [],
};

perfectVerbs.set(нахаркать.name.text, нахаркать);

export { нахаркать };