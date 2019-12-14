import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспороть: PerfectVerb = {
  name: Word('вспороть', 5),
  singular1stPerson: Word('вспорю', 5),
  singular2ndPerson: Word('вспорешь', 3),
  singular3rdPerson: Word('вспорет', 3),
  plural1stPerson: Word('вспорем', 3),
  plural2ndPerson: Word('вспорете', 3),
  plural3rdPerson: Word('вспорют', 3),
  masculinePast: Word('вспорол', 5),
  femininePast: Word('вспорола', 5),
  neuterPast: Word('вспороло', 5),
  pluralPast: Word('вспороли', 5),
  imperativeInformal: Word('вспори', 5),
  imperativeFormal: Word('вспорите', 5),
  imperfect: [],
};

perfectVerbs.set(вспороть.name.text, вспороть);

export { вспороть };