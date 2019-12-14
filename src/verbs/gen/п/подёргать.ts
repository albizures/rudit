import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёргать: PerfectVerb = {
  name: Word('подёргать', 3),
  singular1stPerson: Word('подёргаю', 3),
  singular2ndPerson: Word('подёргаешь', 3),
  singular3rdPerson: Word('подёргает', 3),
  plural1stPerson: Word('подёргаем', 3),
  plural2ndPerson: Word('подёргаете', 3),
  plural3rdPerson: Word('подёргают', 3),
  masculinePast: Word('подёргал', 3),
  femininePast: Word('подёргала', 3),
  neuterPast: Word('подёргало', 3),
  pluralPast: Word('подёргали', 3),
  imperativeInformal: Word('подёргай', 3),
  imperativeFormal: Word('подёргайте', 3),
  imperfect: [],
};

perfectVerbs.set(подёргать.name.text, подёргать);

export { подёргать };