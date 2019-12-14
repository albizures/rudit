import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделывать: PerfectVerb = {
  name: Word('разделывать', 4),
  singular1stPerson: Word('разделываю', 4),
  singular2ndPerson: Word('разделываешь', 4),
  singular3rdPerson: Word('разделывает', 4),
  plural1stPerson: Word('разделываем', 4),
  plural2ndPerson: Word('разделываете', 4),
  plural3rdPerson: Word('разделывают', 4),
  masculinePast: Word('разделывал', 4),
  femininePast: Word('разделывала', 4),
  neuterPast: Word('разделывало', 4),
  pluralPast: Word('разделывали', 4),
  imperativeInformal: Word('разделывай', 4),
  imperativeFormal: Word('разделывайте', 4),
  imperfect: [],
};

perfectVerbs.set(разделывать.name.text, разделывать);

export { разделывать };