import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогореть: PerfectVerb = {
  name: Word('прогореть', 6),
  singular1stPerson: Word('прогорю', 6),
  singular2ndPerson: Word('прогоришь', 6),
  singular3rdPerson: Word('прогорит', 6),
  plural1stPerson: Word('прогорим', 6),
  plural2ndPerson: Word('прогорите', 6),
  plural3rdPerson: Word('прогорят', 6),
  masculinePast: Word('прогорел', 6),
  femininePast: Word('прогорела', 6),
  neuterPast: Word('прогорело', 6),
  pluralPast: Word('прогорели', 6),
  imperativeInformal: Word('прогори', 6),
  imperativeFormal: Word('прогорите', 6),
  imperfect: [],
};

perfectVerbs.set(прогореть.name.text, прогореть);

export { прогореть };