import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проскрипеть: PerfectVerb = {
  name: Word('проскрипеть', 8),
  singular1stPerson: Word('проскриплю', 9),
  singular2ndPerson: Word('проскрипишь', 8),
  singular3rdPerson: Word('проскрипит', 8),
  plural1stPerson: Word('проскрипим', 8),
  plural2ndPerson: Word('проскрипите', 8),
  plural3rdPerson: Word('проскрипят', 8),
  masculinePast: Word('проскрипел', 8),
  femininePast: Word('проскрипела', 8),
  neuterPast: Word('проскрипело', 8),
  pluralPast: Word('проскрипели', 8),
  imperativeInformal: Word('проскрипи', 8),
  imperativeFormal: Word('проскрипите', 8),
  imperfect: [],
};

perfectVerbs.set(проскрипеть.name.text, проскрипеть);

export { проскрипеть };