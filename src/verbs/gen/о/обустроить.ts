import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обустроить: PerfectVerb = {
  name: Word('обустроить', 6),
  singular1stPerson: Word('обустрою', 6),
  singular2ndPerson: Word('обустроишь', 6),
  singular3rdPerson: Word('обустроит', 6),
  plural1stPerson: Word('обустроим', 6),
  plural2ndPerson: Word('обустроите', 6),
  plural3rdPerson: Word('обустроят', 6),
  masculinePast: Word('обустроил', 6),
  femininePast: Word('обустроила', 6),
  neuterPast: Word('обустроило', 6),
  pluralPast: Word('обустроили', 6),
  imperativeInformal: Word('обустрой', 6),
  imperativeFormal: Word('обустройте', 6),
  imperfect: [],
};

perfectVerbs.set(обустроить.name.text, обустроить);

export { обустроить };