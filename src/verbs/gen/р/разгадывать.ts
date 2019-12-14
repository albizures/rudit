import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгадывать: PerfectVerb = {
  name: Word('разгадывать', 4),
  singular1stPerson: Word('разгадываю', 4),
  singular2ndPerson: Word('разгадываешь', 4),
  singular3rdPerson: Word('разгадывает', 4),
  plural1stPerson: Word('разгадываем', 4),
  plural2ndPerson: Word('разгадываете', 4),
  plural3rdPerson: Word('разгадывают', 4),
  masculinePast: Word('разгадывал', 4),
  femininePast: Word('разгадывала', 4),
  neuterPast: Word('разгадывало', 4),
  pluralPast: Word('разгадывали', 4),
  imperativeInformal: Word('разгадывай', 4),
  imperativeFormal: Word('разгадывайте', 4),
  imperfect: [],
};

perfectVerbs.set(разгадывать.name.text, разгадывать);

export { разгадывать };