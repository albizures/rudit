import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гаркать: PerfectVerb = {
  name: Word('гаркать', 1),
  singular1stPerson: Word('гаркаю', 1),
  singular2ndPerson: Word('гаркаешь', 1),
  singular3rdPerson: Word('гаркает', 1),
  plural1stPerson: Word('гаркаем', 1),
  plural2ndPerson: Word('гаркаете', 1),
  plural3rdPerson: Word('гаркают', 1),
  masculinePast: Word('гаркал', 1),
  femininePast: Word('гаркала', 1),
  neuterPast: Word('гаркало', 1),
  pluralPast: Word('гаркали', 1),
  imperativeInformal: Word('гаркай', 1),
  imperativeFormal: Word('гаркайте', 1),
  imperfect: [],
};

perfectVerbs.set(гаркать.name.text, гаркать);

export { гаркать };