import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрядить: PerfectVerb = {
  name: Word('подрядить', 6),
  singular1stPerson: Word('подряжу', 6),
  singular2ndPerson: Word('подрядишь', 6),
  singular3rdPerson: Word('подрядит', 6),
  plural1stPerson: Word('подрядим', 6),
  plural2ndPerson: Word('подрядите', 6),
  plural3rdPerson: Word('подрядят', 6),
  masculinePast: Word('подрядил', 6),
  femininePast: Word('подрядила', 6),
  neuterPast: Word('подрядило', 6),
  pluralPast: Word('подрядили', 6),
  imperativeInformal: Word('подряди', 6),
  imperativeFormal: Word('подрядите', 6),
  imperfect: [],
};

perfectVerbs.set(подрядить.name.text, подрядить);

export { подрядить };