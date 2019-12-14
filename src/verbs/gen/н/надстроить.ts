import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надстроить: PerfectVerb = {
  name: Word('надстроить', 6),
  singular1stPerson: Word('надстрою', 6),
  singular2ndPerson: Word('надстроишь', 6),
  singular3rdPerson: Word('надстроит', 6),
  plural1stPerson: Word('надстроим', 6),
  plural2ndPerson: Word('надстроите', 6),
  plural3rdPerson: Word('надстроят', 6),
  masculinePast: Word('надстроил', 6),
  femininePast: Word('надстроила', 6),
  neuterPast: Word('надстроило', 6),
  pluralPast: Word('надстроили', 6),
  imperativeInformal: Word('надстрой', 6),
  imperativeFormal: Word('надстройте', 6),
  imperfect: [],
};

perfectVerbs.set(надстроить.name.text, надстроить);

export { надстроить };