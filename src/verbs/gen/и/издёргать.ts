import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издёргать: PerfectVerb = {
  name: Word('издёргать', 6),
  singular1stPerson: Word('издёргаю', 6),
  singular2ndPerson: Word('издёргаешь', 6),
  singular3rdPerson: Word('издёргает', 6),
  plural1stPerson: Word('издёргаем', 6),
  plural2ndPerson: Word('издёргаете', 6),
  plural3rdPerson: Word('издёргают', 6),
  masculinePast: Word('издёргал', 6),
  femininePast: Word('издёргала', 6),
  neuterPast: Word('издёргало', 6),
  pluralPast: Word('издёргали', 6),
  imperativeInformal: Word('издёргай', 6),
  imperativeFormal: Word('издёргайте', 6),
  imperfect: [],
};

perfectVerbs.set(издёргать.name.text, издёргать);

export { издёргать };