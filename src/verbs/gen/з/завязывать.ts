import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завязывать: PerfectVerb = {
  name: Word('завязывать', 3),
  singular1stPerson: Word('завязываю', 3),
  singular2ndPerson: Word('завязываешь', 3),
  singular3rdPerson: Word('завязывает', 3),
  plural1stPerson: Word('завязываем', 3),
  plural2ndPerson: Word('завязываете', 3),
  plural3rdPerson: Word('завязывают', 3),
  masculinePast: Word('завязывал', 3),
  femininePast: Word('завязывала', 3),
  neuterPast: Word('завязывало', 3),
  pluralPast: Word('завязывали', 3),
  imperativeInformal: Word('завязывай', 3),
  imperativeFormal: Word('завязывайте', 3),
  imperfect: [],
};

perfectVerbs.set(завязывать.name.text, завязывать);

export { завязывать };