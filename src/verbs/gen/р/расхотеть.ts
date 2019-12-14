import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхотеть: PerfectVerb = {
  name: Word('расхотеть', 6),
  singular1stPerson: Word('расхочу', 6),
  singular2ndPerson: Word('расхочешь', 4),
  singular3rdPerson: Word('расхочет', 4),
  plural1stPerson: Word('расхотим', 6),
  plural2ndPerson: Word('расхотите', 6),
  plural3rdPerson: Word('расхотят', 6),
  masculinePast: Word('расхотел', 6),
  femininePast: Word('расхотела', 6),
  neuterPast: Word('расхотело', 6),
  pluralPast: Word('расхотели', 6),
  imperativeInformal: Word('расхоти', 6),
  imperativeFormal: Word('расхотите', 6),
  imperfect: [],
};

perfectVerbs.set(расхотеть.name.text, расхотеть);

export { расхотеть };