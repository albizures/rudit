import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повязывать: PerfectVerb = {
  name: Word('повязывать', 3),
  singular1stPerson: Word('повязываю', 3),
  singular2ndPerson: Word('повязываешь', 3),
  singular3rdPerson: Word('повязывает', 3),
  plural1stPerson: Word('повязываем', 3),
  plural2ndPerson: Word('повязываете', 3),
  plural3rdPerson: Word('повязывают', 3),
  masculinePast: Word('повязывал', 3),
  femininePast: Word('повязывала', 3),
  neuterPast: Word('повязывало', 3),
  pluralPast: Word('повязывали', 3),
  imperativeInformal: Word('повязывай', 3),
  imperativeFormal: Word('повязывайте', 3),
  imperfect: [],
};

perfectVerbs.set(повязывать.name.text, повязывать);

export { повязывать };