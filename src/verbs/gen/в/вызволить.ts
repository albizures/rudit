import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызволить: PerfectVerb = {
  name: Word('вызволить', 1),
  singular1stPerson: Word('вызволю', 1),
  singular2ndPerson: Word('вызволишь', 1),
  singular3rdPerson: Word('вызволит', 1),
  plural1stPerson: Word('вызволим', 1),
  plural2ndPerson: Word('вызволите', 1),
  plural3rdPerson: Word('вызволят', 1),
  masculinePast: Word('вызволил', 1),
  femininePast: Word('вызволила', 1),
  neuterPast: Word('вызволило', 1),
  pluralPast: Word('вызволили', 1),
  imperativeInformal: Word('вызволи', 1),
  imperativeFormal: Word('вызвольте', 1),
  imperfect: [],
};

perfectVerbs.set(вызволить.name.text, вызволить);

export { вызволить };