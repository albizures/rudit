import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжижать: PerfectVerb = {
  name: Word('сжижать', 4),
  singular1stPerson: Word('сжижаю', 4),
  singular2ndPerson: Word('сжижаешь', 4),
  singular3rdPerson: Word('сжижает', 4),
  plural1stPerson: Word('сжижаем', 4),
  plural2ndPerson: Word('сжижаете', 4),
  plural3rdPerson: Word('сжижают', 4),
  masculinePast: Word('сжижал', 4),
  femininePast: Word('сжижала', 4),
  neuterPast: Word('сжижало', 4),
  pluralPast: Word('сжижали', 4),
  imperativeInformal: Word('сжижай', 4),
  imperativeFormal: Word('сжижайте', 4),
  imperfect: [],
};

perfectVerbs.set(сжижать.name.text, сжижать);

export { сжижать };