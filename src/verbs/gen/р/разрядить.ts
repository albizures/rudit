import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрядить: PerfectVerb = {
  name: Word('разрядить', 6),
  singular1stPerson: Word('разряжу', 6),
  singular2ndPerson: Word('разрядишь', 4),
  singular3rdPerson: Word('разрядит', 4),
  plural1stPerson: Word('разрядим', 4),
  plural2ndPerson: Word('разрядите', 4),
  plural3rdPerson: Word('разрядят', 4),
  masculinePast: Word('разрядил', 6),
  femininePast: Word('разрядила', 6),
  neuterPast: Word('разрядило', 6),
  pluralPast: Word('разрядили', 6),
  imperativeInformal: Word('разряди', 6),
  imperativeFormal: Word('разрядите', 6),
  imperfect: [],
};

perfectVerbs.set(разрядить.name.text, разрядить);

export { разрядить };