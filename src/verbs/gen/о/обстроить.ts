import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстроить: PerfectVerb = {
  name: Word('обстроить', 5),
  singular1stPerson: Word('обстрою', 5),
  singular2ndPerson: Word('обстроишь', 5),
  singular3rdPerson: Word('обстроит', 5),
  plural1stPerson: Word('обстроим', 5),
  plural2ndPerson: Word('обстроите', 5),
  plural3rdPerson: Word('обстроят', 5),
  masculinePast: Word('обстроил', 5),
  femininePast: Word('обстроила', 5),
  neuterPast: Word('обстроило', 5),
  pluralPast: Word('обстроили', 5),
  imperativeInformal: Word('обстрой', 5),
  imperativeFormal: Word('обстройте', 5),
  imperfect: [],
};

perfectVerbs.set(обстроить.name.text, обстроить);

export { обстроить };