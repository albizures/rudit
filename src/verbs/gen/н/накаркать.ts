import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накаркать: PerfectVerb = {
  name: Word('накаркать', 3),
  singular1stPerson: Word('накаркаю', 3),
  singular2ndPerson: Word('накаркаешь', 3),
  singular3rdPerson: Word('накаркает', 3),
  plural1stPerson: Word('накаркаем', 3),
  plural2ndPerson: Word('накаркаете', 3),
  plural3rdPerson: Word('накаркают', 3),
  masculinePast: Word('накаркал', 3),
  femininePast: Word('накаркала', 3),
  neuterPast: Word('накаркало', 3),
  pluralPast: Word('накаркали', 3),
  imperativeInformal: Word('накаркай', 3),
  imperativeFormal: Word('накаркайте', 3),
  imperfect: [],
};

perfectVerbs.set(накаркать.name.text, накаркать);

export { накаркать };