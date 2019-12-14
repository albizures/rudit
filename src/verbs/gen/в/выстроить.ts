import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстроить: PerfectVerb = {
  name: Word('выстроить', 1),
  singular1stPerson: Word('выстрою', 1),
  singular2ndPerson: Word('выстроишь', 1),
  singular3rdPerson: Word('выстроит', 1),
  plural1stPerson: Word('выстроим', 1),
  plural2ndPerson: Word('выстроите', 1),
  plural3rdPerson: Word('выстроят', 1),
  masculinePast: Word('выстроил', 1),
  femininePast: Word('выстроила', 1),
  neuterPast: Word('выстроило', 1),
  pluralPast: Word('выстроили', 1),
  imperativeInformal: Word('выстрой', 1),
  imperativeFormal: Word('выстройте', 1),
  imperfect: [],
};

perfectVerbs.set(выстроить.name.text, выстроить);

export { выстроить };