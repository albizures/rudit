import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвешить: PerfectVerb = {
  name: Word('обвешить', 5),
  singular1stPerson: Word('обвешу', 5),
  singular2ndPerson: Word('обвешишь', 5),
  singular3rdPerson: Word('обвешит', 5),
  plural1stPerson: Word('обвешим', 5),
  plural2ndPerson: Word('обвешите', 5),
  plural3rdPerson: Word('обвешат', 5),
  masculinePast: Word('обвешил', 5),
  femininePast: Word('обвешила', 5),
  neuterPast: Word('обвешило', 5),
  pluralPast: Word('обвешили', 5),
  imperativeInformal: Word('обвеши', 5),
  imperativeFormal: Word('обвешите', 5),
  imperfect: [],
};

perfectVerbs.set(обвешить.name.text, обвешить);

export { обвешить };