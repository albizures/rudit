import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбалтывать: PerfectVerb = {
  name: Word('разбалтывать', 4),
  singular1stPerson: Word('разбалтываю', 4),
  singular2ndPerson: Word('разбалтываешь', 4),
  singular3rdPerson: Word('разбалтывает', 4),
  plural1stPerson: Word('разбалтываем', 4),
  plural2ndPerson: Word('разбалтываете', 4),
  plural3rdPerson: Word('разбалтывают', 4),
  masculinePast: Word('разбалтывал', 4),
  femininePast: Word('разбалтывала', 4),
  neuterPast: Word('разбалтывало', 4),
  pluralPast: Word('разбалтывали', 4),
  imperativeInformal: Word('разбалтывай', 4),
  imperativeFormal: Word('разбалтывайте', 4),
  imperfect: [],
};

perfectVerbs.set(разбалтывать.name.text, разбалтывать);

export { разбалтывать };