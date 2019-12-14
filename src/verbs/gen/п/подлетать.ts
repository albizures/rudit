import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлетать: PerfectVerb = {
  name: Word('подлетать', 6),
  singular1stPerson: Word('подлетаю', 6),
  singular2ndPerson: Word('подлетаешь', 6),
  singular3rdPerson: Word('подлетает', 6),
  plural1stPerson: Word('подлетаем', 6),
  plural2ndPerson: Word('подлетаете', 6),
  plural3rdPerson: Word('подлетают', 6),
  masculinePast: Word('подлетал', 6),
  femininePast: Word('подлетала', 6),
  neuterPast: Word('подлетало', 6),
  pluralPast: Word('подлетали', 6),
  imperativeInformal: Word('подлетай', 6),
  imperativeFormal: Word('подлетайте', 6),
  imperfect: [],
};

perfectVerbs.set(подлетать.name.text, подлетать);

export { подлетать };