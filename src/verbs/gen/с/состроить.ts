import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const состроить: PerfectVerb = {
  name: Word('состроить', 5),
  singular1stPerson: Word('сострою', 5),
  singular2ndPerson: Word('состроишь', 5),
  singular3rdPerson: Word('состроит', 5),
  plural1stPerson: Word('состроим', 5),
  plural2ndPerson: Word('состроите', 5),
  plural3rdPerson: Word('состроят', 5),
  masculinePast: Word('состроил', 5),
  femininePast: Word('состроила', 5),
  neuterPast: Word('состроило', 5),
  pluralPast: Word('состроили', 5),
  imperativeInformal: Word('сострой', 5),
  imperativeFormal: Word('состройте', 5),
  imperfect: [],
};

perfectVerbs.set(состроить.name.text, состроить);

export { состроить };