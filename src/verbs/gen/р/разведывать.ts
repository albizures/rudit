import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разведывать: PerfectVerb = {
  name: Word('разведывать', 4),
  singular1stPerson: Word('разведываю', 4),
  singular2ndPerson: Word('разведываешь', 4),
  singular3rdPerson: Word('разведывает', 4),
  plural1stPerson: Word('разведываем', 4),
  plural2ndPerson: Word('разведываете', 4),
  plural3rdPerson: Word('разведывают', 4),
  masculinePast: Word('разведывал', 4),
  femininePast: Word('разведывала', 4),
  neuterPast: Word('разведывало', 4),
  pluralPast: Word('разведывали', 4),
  imperativeInformal: Word('разведывай', 4),
  imperativeFormal: Word('разведывайте', 4),
  imperfect: [],
};

perfectVerbs.set(разведывать.name.text, разведывать);

export { разведывать };