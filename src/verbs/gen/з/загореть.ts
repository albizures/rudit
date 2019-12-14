import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загореть: PerfectVerb = {
  name: Word('загореть', 5),
  singular1stPerson: Word('загорю', 5),
  singular2ndPerson: Word('загоришь', 5),
  singular3rdPerson: Word('загорит', 5),
  plural1stPerson: Word('загорим', 5),
  plural2ndPerson: Word('загорите', 5),
  plural3rdPerson: Word('загорят', 5),
  masculinePast: Word('загорел', 5),
  femininePast: Word('загорела', 5),
  neuterPast: Word('загорело', 5),
  pluralPast: Word('загорели', 5),
  imperativeInformal: Word('загори', 5),
  imperativeFormal: Word('загорите', 5),
  imperfect: ['загорать'],
};

perfectVerbs.set(загореть.name.text, загореть);

export { загореть };