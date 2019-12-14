import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шипеть: PerfectVerb = {
  name: Word('шипеть', 3),
  singular1stPerson: Word('шиплю', 4),
  singular2ndPerson: Word('шипишь', 3),
  singular3rdPerson: Word('шипит', 3),
  plural1stPerson: Word('шипим', 3),
  plural2ndPerson: Word('шипите', 3),
  plural3rdPerson: Word('шипят', 3),
  masculinePast: Word('шипел', 3),
  femininePast: Word('шипела', 3),
  neuterPast: Word('шипело', 3),
  pluralPast: Word('шипели', 3),
  imperativeInformal: Word('шипи', 3),
  imperativeFormal: Word('шипите', 3),
  imperfect: [],
};

perfectVerbs.set(шипеть.name.text, шипеть);

export { шипеть };