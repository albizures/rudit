import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытерпеть: PerfectVerb = {
  name: Word('вытерпеть', 1),
  singular1stPerson: Word('вытерплю', 1),
  singular2ndPerson: Word('вытерпишь', 1),
  singular3rdPerson: Word('вытерпит', 1),
  plural1stPerson: Word('вытерпим', 1),
  plural2ndPerson: Word('вытерпите', 1),
  plural3rdPerson: Word('вытерпят', 1),
  masculinePast: Word('вытерпел', 1),
  femininePast: Word('вытерпела', 1),
  neuterPast: Word('вытерпело', 1),
  pluralPast: Word('вытерпели', 1),
  imperativeInformal: Word('вытерпи', 1),
  imperativeFormal: Word('вытерпите', 1),
  imperfect: [],
};

perfectVerbs.set(вытерпеть.name.text, вытерпеть);

export { вытерпеть };