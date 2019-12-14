import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохрипеть: PerfectVerb = {
  name: Word('прохрипеть', 7),
  singular1stPerson: Word('прохриплю', 8),
  singular2ndPerson: Word('прохрипишь', 7),
  singular3rdPerson: Word('прохрипит', 7),
  plural1stPerson: Word('прохрипим', 7),
  plural2ndPerson: Word('прохрипите', 7),
  plural3rdPerson: Word('прохрипят', 7),
  masculinePast: Word('прохрипел', 7),
  femininePast: Word('прохрипела', 7),
  neuterPast: Word('прохрипело', 7),
  pluralPast: Word('прохрипели', 7),
  imperativeInformal: Word('прохрипи', 7),
  imperativeFormal: Word('прохрипите', 7),
  imperfect: [],
};

perfectVerbs.set(прохрипеть.name.text, прохрипеть);

export { прохрипеть };