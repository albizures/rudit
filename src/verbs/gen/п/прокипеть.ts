import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокипеть: PerfectVerb = {
  name: Word('прокипеть', 6),
  singular1stPerson: Word('прокиплю', 7),
  singular2ndPerson: Word('прокипишь', 6),
  singular3rdPerson: Word('прокипит', 6),
  plural1stPerson: Word('прокипим', 6),
  plural2ndPerson: Word('прокипите', 6),
  plural3rdPerson: Word('прокипят', 6),
  masculinePast: Word('прокипел', 6),
  femininePast: Word('прокипела', 6),
  neuterPast: Word('прокипело', 6),
  pluralPast: Word('прокипели', 6),
  imperativeInformal: Word('прокипи', 6),
  imperativeFormal: Word('прокипите', 6),
  imperfect: [],
};

perfectVerbs.set(прокипеть.name.text, прокипеть);

export { прокипеть };