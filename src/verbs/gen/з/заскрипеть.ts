import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскрипеть: PerfectVerb = {
  name: Word('заскрипеть', 7),
  singular1stPerson: Word('заскриплю', 8),
  singular2ndPerson: Word('заскрипишь', 7),
  singular3rdPerson: Word('заскрипит', 7),
  plural1stPerson: Word('заскрипим', 7),
  plural2ndPerson: Word('заскрипите', 7),
  plural3rdPerson: Word('заскрипят', 7),
  masculinePast: Word('заскрипел', 7),
  femininePast: Word('заскрипела', 7),
  neuterPast: Word('заскрипело', 7),
  pluralPast: Word('заскрипели', 7),
  imperativeInformal: Word('заскрипи', 7),
  imperativeFormal: Word('заскрипите', 7),
  imperfect: [],
};

perfectVerbs.set(заскрипеть.name.text, заскрипеть);

export { заскрипеть };