import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вместить: PerfectVerb = {
  name: Word('вместить', 5),
  singular1stPerson: Word('вмещу', 4),
  singular2ndPerson: Word('вместишь', 5),
  singular3rdPerson: Word('вместит', 5),
  plural1stPerson: Word('вместим', 5),
  plural2ndPerson: Word('вместите', 5),
  plural3rdPerson: Word('вместят', 5),
  masculinePast: Word('вместил', 5),
  femininePast: Word('вместила', 5),
  neuterPast: Word('вместило', 5),
  pluralPast: Word('вместили', 5),
  imperativeInformal: Word('вмести', 5),
  imperativeFormal: Word('вместите', 5),
  imperfect: [],
};

perfectVerbs.set(вместить.name.text, вместить);

export { вместить };