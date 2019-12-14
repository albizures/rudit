import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкроить: PerfectVerb = {
  name: Word('выкроить', 1),
  singular1stPerson: Word('выкрою', 1),
  singular2ndPerson: Word('выкроишь', 1),
  singular3rdPerson: Word('выкроит', 1),
  plural1stPerson: Word('выкроим', 1),
  plural2ndPerson: Word('выкроите', 1),
  plural3rdPerson: Word('выкроят', 1),
  masculinePast: Word('выкроил', 1),
  femininePast: Word('выкроила', 1),
  neuterPast: Word('выкроило', 1),
  pluralPast: Word('выкроили', 1),
  imperativeInformal: Word('выкрои', 1),
  imperativeFormal: Word('выкроите', 1),
  imperfect: [],
};

perfectVerbs.set(выкроить.name.text, выкроить);

export { выкроить };