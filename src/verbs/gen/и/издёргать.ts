import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издёргать: PerfectVerb = {
  name: Word('издёргать', 3),
  singular1stPerson: Word('издёргаю', 3),
  singular2ndPerson: Word('издёргаешь', 3),
  singular3rdPerson: Word('издёргает', 3),
  plural1stPerson: Word('издёргаем', 3),
  plural2ndPerson: Word('издёргаете', 3),
  plural3rdPerson: Word('издёргают', 3),
  masculinePast: Word('издёргал', 3),
  femininePast: Word('издёргала', 3),
  neuterPast: Word('издёргало', 3),
  pluralPast: Word('издёргали', 3),
  imperativeInformal: Word('издёргай', 3),
  imperativeFormal: Word('издёргайте', 3),
  imperfect: [],
};

perfectVerbs.set(издёргать.name.text, издёргать);

export { издёргать };