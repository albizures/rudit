import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвязывать: PerfectVerb = {
  name: Word('подвязывать', 4),
  singular1stPerson: Word('подвязываю', 4),
  singular2ndPerson: Word('подвязываешь', 4),
  singular3rdPerson: Word('подвязывает', 4),
  plural1stPerson: Word('подвязываем', 4),
  plural2ndPerson: Word('подвязываете', 4),
  plural3rdPerson: Word('подвязывают', 4),
  masculinePast: Word('подвязывал', 4),
  femininePast: Word('подвязывала', 4),
  neuterPast: Word('подвязывало', 4),
  pluralPast: Word('подвязывали', 4),
  imperativeInformal: Word('подвязывай', 4),
  imperativeFormal: Word('подвязывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подвязывать.name.text, подвязывать);

export { подвязывать };