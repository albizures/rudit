import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделить: PerfectVerb = {
  name: Word('разделить', 6),
  singular1stPerson: Word('разделю', 6),
  singular2ndPerson: Word('разделишь', 4),
  singular3rdPerson: Word('разделит', 4),
  plural1stPerson: Word('разделим', 4),
  plural2ndPerson: Word('разделите', 4),
  plural3rdPerson: Word('разделят', 4),
  masculinePast: Word('разделил', 6),
  femininePast: Word('разделила', 6),
  neuterPast: Word('разделило', 6),
  pluralPast: Word('разделили', 6),
  imperativeInformal: Word('раздели', 6),
  imperativeFormal: Word('разделите', 6),
  imperfect: [],
};

perfectVerbs.set(разделить.name.text, разделить);

export { разделить };