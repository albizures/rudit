import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посолить: PerfectVerb = {
  name: Word('посолить', 5),
  singular1stPerson: Word('посолю', 5),
  singular2ndPerson: Word('посолишь', 3),
  singular3rdPerson: Word('посолит', 3),
  plural1stPerson: Word('посолим', 3),
  plural2ndPerson: Word('посолите', 3),
  plural3rdPerson: Word('посолят', 3),
  masculinePast: Word('посолил', 5),
  femininePast: Word('посолила', 5),
  neuterPast: Word('посолило', 5),
  pluralPast: Word('посолили', 5),
  imperativeInformal: Word('посоли', 5),
  imperativeFormal: Word('посолите', 5),
  imperfect: [],
};

perfectVerbs.set(посолить.name.text, посолить);

export { посолить };