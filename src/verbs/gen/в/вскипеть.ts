import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскипеть: PerfectVerb = {
  name: Word('вскипеть', 5),
  singular1stPerson: Word('вскиплю', 6),
  singular2ndPerson: Word('вскипишь', 5),
  singular3rdPerson: Word('вскипит', 5),
  plural1stPerson: Word('вскипим', 5),
  plural2ndPerson: Word('вскипите', 5),
  plural3rdPerson: Word('вскипят', 5),
  masculinePast: Word('вскипел', 5),
  femininePast: Word('вскипела', 5),
  neuterPast: Word('вскипело', 5),
  pluralPast: Word('вскипели', 5),
  imperativeInformal: Word('вскипи', 5),
  imperativeFormal: Word('вскипите', 5),
  imperfect: [],
};

perfectVerbs.set(вскипеть.name.text, вскипеть);

export { вскипеть };