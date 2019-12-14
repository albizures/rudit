import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрывать: PerfectVerb = {
  name: Word('разрывать', 6),
  singular1stPerson: Word('разрываю', 6),
  singular2ndPerson: Word('разрываешь', 6),
  singular3rdPerson: Word('разрывает', 6),
  plural1stPerson: Word('разрываем', 6),
  plural2ndPerson: Word('разрываете', 6),
  plural3rdPerson: Word('разрывают', 6),
  masculinePast: Word('разрывал', 6),
  femininePast: Word('разрывала', 6),
  neuterPast: Word('разрывало', 6),
  pluralPast: Word('разрывали', 6),
  imperativeInformal: Word('разрывай', 6),
  imperativeFormal: Word('разрывайте', 6),
  imperfect: [],
};

perfectVerbs.set(разрывать.name.text, разрывать);

export { разрывать };