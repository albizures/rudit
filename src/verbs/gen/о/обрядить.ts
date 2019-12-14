import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрядить: PerfectVerb = {
  name: Word('обрядить', 5),
  singular1stPerson: Word('обряжу', 5),
  singular2ndPerson: Word('обрядишь', 3),
  singular3rdPerson: Word('обрядит', 3),
  plural1stPerson: Word('обрядим', 3),
  plural2ndPerson: Word('обрядите', 3),
  plural3rdPerson: Word('обрядят', 3),
  masculinePast: Word('обрядил', 5),
  femininePast: Word('обрядила', 5),
  neuterPast: Word('обрядило', 5),
  pluralPast: Word('обрядили', 5),
  imperativeInformal: Word('обряди', 5),
  imperativeFormal: Word('обрядите', 5),
  imperfect: [],
};

perfectVerbs.set(обрядить.name.text, обрядить);

export { обрядить };