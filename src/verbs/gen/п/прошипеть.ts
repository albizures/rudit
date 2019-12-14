import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошипеть: PerfectVerb = {
  name: Word('прошипеть', 6),
  singular1stPerson: Word('прошиплю', 7),
  singular2ndPerson: Word('прошипишь', 6),
  singular3rdPerson: Word('прошипит', 6),
  plural1stPerson: Word('прошипим', 6),
  plural2ndPerson: Word('прошипите', 6),
  plural3rdPerson: Word('прошипят', 6),
  masculinePast: Word('прошипел', 6),
  femininePast: Word('прошипела', 6),
  neuterPast: Word('прошипело', 6),
  pluralPast: Word('прошипели', 6),
  imperativeInformal: Word('прошипи', 6),
  imperativeFormal: Word('прошипите', 6),
  imperfect: [],
};

perfectVerbs.set(прошипеть.name.text, прошипеть);

export { прошипеть };