import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увязывать: PerfectVerb = {
  name: Word('увязывать', 2),
  singular1stPerson: Word('увязываю', 2),
  singular2ndPerson: Word('увязываешь', 2),
  singular3rdPerson: Word('увязывает', 2),
  plural1stPerson: Word('увязываем', 2),
  plural2ndPerson: Word('увязываете', 2),
  plural3rdPerson: Word('увязывают', 2),
  masculinePast: Word('увязывал', 2),
  femininePast: Word('увязывала', 2),
  neuterPast: Word('увязывало', 2),
  pluralPast: Word('увязывали', 2),
  imperativeInformal: Word('увязывай', 2),
  imperativeFormal: Word('увязывайте', 2),
  imperfect: [],
};

perfectVerbs.set(увязывать.name.text, увязывать);

export { увязывать };