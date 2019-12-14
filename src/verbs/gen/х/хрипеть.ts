import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хрипеть: PerfectVerb = {
  name: Word('хрипеть', 4),
  singular1stPerson: Word('хриплю', 5),
  singular2ndPerson: Word('хрипишь', 4),
  singular3rdPerson: Word('хрипит', 4),
  plural1stPerson: Word('хрипим', 4),
  plural2ndPerson: Word('хрипите', 4),
  plural3rdPerson: Word('хрипят', 4),
  masculinePast: Word('хрипел', 4),
  femininePast: Word('хрипела', 4),
  neuterPast: Word('хрипело', 4),
  pluralPast: Word('хрипели', 4),
  imperativeInformal: Word('хрипи', 4),
  imperativeFormal: Word('хрипите', 4),
  imperfect: [],
};

perfectVerbs.set(хрипеть.name.text, хрипеть);

export { хрипеть };