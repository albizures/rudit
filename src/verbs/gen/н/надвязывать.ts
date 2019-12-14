import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надвязывать: PerfectVerb = {
  name: Word('надвязывать', 4),
  singular1stPerson: Word('надвязываю', 4),
  singular2ndPerson: Word('надвязываешь', 4),
  singular3rdPerson: Word('надвязывает', 4),
  plural1stPerson: Word('надвязываем', 4),
  plural2ndPerson: Word('надвязываете', 4),
  plural3rdPerson: Word('надвязывают', 4),
  masculinePast: Word('надвязывал', 4),
  femininePast: Word('надвязывала', 4),
  neuterPast: Word('надвязывало', 4),
  pluralPast: Word('надвязывали', 4),
  imperativeInformal: Word('надвязывай', 4),
  imperativeFormal: Word('надвязывайте', 4),
  imperfect: [],
};

perfectVerbs.set(надвязывать.name.text, надвязывать);

export { надвязывать };