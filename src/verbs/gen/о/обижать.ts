import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обижать: PerfectVerb = {
  name: Word('обижать', 4),
  singular1stPerson: Word('обижаю', 4),
  singular2ndPerson: Word('обижаешь', 4),
  singular3rdPerson: Word('обижает', 4),
  plural1stPerson: Word('обижаем', 4),
  plural2ndPerson: Word('обижаете', 4),
  plural3rdPerson: Word('обижают', 4),
  masculinePast: Word('обижал', 4),
  femininePast: Word('обижала', 4),
  neuterPast: Word('обижало', 4),
  pluralPast: Word('обижали', 4),
  imperativeInformal: Word('обижай', 4),
  imperativeFormal: Word('обижайте', 4),
  imperfect: ['обидеть'],
};

perfectVerbs.set(обижать.name.text, обижать);

export { обижать };