import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шаркать: PerfectVerb = {
  name: Word('шаркать', 1),
  singular1stPerson: Word('шаркаю', 1),
  singular2ndPerson: Word('шаркаешь', 1),
  singular3rdPerson: Word('шаркает', 1),
  plural1stPerson: Word('шаркаем', 1),
  plural2ndPerson: Word('шаркаете', 1),
  plural3rdPerson: Word('шаркают', 1),
  masculinePast: Word('шаркал', 1),
  femininePast: Word('шаркала', 1),
  neuterPast: Word('шаркало', 1),
  pluralPast: Word('шаркали', 1),
  imperativeInformal: Word('шаркай', 1),
  imperativeFormal: Word('шаркайте', 1),
  imperfect: [],
};

perfectVerbs.set(шаркать.name.text, шаркать);

export { шаркать };