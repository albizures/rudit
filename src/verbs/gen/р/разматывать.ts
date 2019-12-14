import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разматывать: PerfectVerb = {
  name: Word('разматывать', 4),
  singular1stPerson: Word('разматываю', 4),
  singular2ndPerson: Word('разматываешь', 4),
  singular3rdPerson: Word('разматывает', 4),
  plural1stPerson: Word('разматываем', 4),
  plural2ndPerson: Word('разматываете', 4),
  plural3rdPerson: Word('разматывают', 4),
  masculinePast: Word('разматывал', 4),
  femininePast: Word('разматывала', 4),
  neuterPast: Word('разматывало', 4),
  pluralPast: Word('разматывали', 4),
  imperativeInformal: Word('разматывай', 4),
  imperativeFormal: Word('разматывайте', 4),
  imperfect: [],
};

perfectVerbs.set(разматывать.name.text, разматывать);

export { разматывать };