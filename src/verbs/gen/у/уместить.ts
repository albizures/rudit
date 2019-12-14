import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уместить: PerfectVerb = {
  name: Word('уместить', 5),
  singular1stPerson: Word('умещу', 4),
  singular2ndPerson: Word('уместишь', 5),
  singular3rdPerson: Word('уместит', 5),
  plural1stPerson: Word('уместим', 5),
  plural2ndPerson: Word('уместите', 5),
  plural3rdPerson: Word('уместят', 5),
  masculinePast: Word('уместил', 5),
  femininePast: Word('уместила', 5),
  neuterPast: Word('уместило', 5),
  pluralPast: Word('уместили', 5),
  imperativeInformal: Word('умести', 5),
  imperativeFormal: Word('уместите', 5),
  imperfect: [],
};

perfectVerbs.set(уместить.name.text, уместить);

export { уместить };