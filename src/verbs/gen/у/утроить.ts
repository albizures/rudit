import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утроить: PerfectVerb = {
  name: Word('утроить', 3),
  singular1stPerson: Word('утрою', 3),
  singular2ndPerson: Word('утроишь', 3),
  singular3rdPerson: Word('утроит', 3),
  plural1stPerson: Word('утроим', 3),
  plural2ndPerson: Word('утроите', 3),
  plural3rdPerson: Word('утроят', 3),
  masculinePast: Word('утроил', 3),
  femininePast: Word('утроила', 3),
  neuterPast: Word('утроило', 3),
  pluralPast: Word('утроили', 3),
  imperativeInformal: Word('утрой', 3),
  imperativeFormal: Word('утройте', 3),
  imperfect: [],
};

perfectVerbs.set(утроить.name.text, утроить);

export { утроить };