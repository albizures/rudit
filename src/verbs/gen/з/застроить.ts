import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застроить: PerfectVerb = {
  name: Word('застроить', 5),
  singular1stPerson: Word('застрою', 5),
  singular2ndPerson: Word('застроишь', 5),
  singular3rdPerson: Word('застроит', 5),
  plural1stPerson: Word('застроим', 5),
  plural2ndPerson: Word('застроите', 5),
  plural3rdPerson: Word('застроят', 5),
  masculinePast: Word('застроил', 5),
  femininePast: Word('застроила', 5),
  neuterPast: Word('застроило', 5),
  pluralPast: Word('застроили', 5),
  imperativeInformal: Word('застрой', 5),
  imperativeFormal: Word('застройте', 5),
  imperfect: [],
};

perfectVerbs.set(застроить.name.text, застроить);

export { застроить };