import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подёргать: PerfectVerb = {
  name: Word('подёргать', 6),
  singular1stPerson: Word('подёргаю', 6),
  singular2ndPerson: Word('подёргаешь', 6),
  singular3rdPerson: Word('подёргает', 6),
  plural1stPerson: Word('подёргаем', 6),
  plural2ndPerson: Word('подёргаете', 6),
  plural3rdPerson: Word('подёргают', 6),
  masculinePast: Word('подёргал', 6),
  femininePast: Word('подёргала', 6),
  neuterPast: Word('подёргало', 6),
  pluralPast: Word('подёргали', 6),
  imperativeInformal: Word('подёргай', 6),
  imperativeFormal: Word('подёргайте', 6),
  imperfect: [],
};

perfectVerbs.set(подёргать.name.text, подёргать);

export { подёргать };