import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привязывать: PerfectVerb = {
  name: Word('привязывать', 4),
  singular1stPerson: Word('привязываю', 4),
  singular2ndPerson: Word('привязываешь', 4),
  singular3rdPerson: Word('привязывает', 4),
  plural1stPerson: Word('привязываем', 4),
  plural2ndPerson: Word('привязываете', 4),
  plural3rdPerson: Word('привязывают', 4),
  masculinePast: Word('привязывал', 4),
  femininePast: Word('привязывала', 4),
  neuterPast: Word('привязывало', 4),
  pluralPast: Word('привязывали', 4),
  imperativeInformal: Word('привязывай', 4),
  imperativeFormal: Word('привязывайте', 4),
  imperfect: [],
};

perfectVerbs.set(привязывать.name.text, привязывать);

export { привязывать };