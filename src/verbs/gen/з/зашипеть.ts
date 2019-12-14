import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашипеть: PerfectVerb = {
  name: Word('зашипеть', 5),
  singular1stPerson: Word('зашиплю', 6),
  singular2ndPerson: Word('зашипишь', 5),
  singular3rdPerson: Word('зашипит', 5),
  plural1stPerson: Word('зашипим', 5),
  plural2ndPerson: Word('зашипите', 5),
  plural3rdPerson: Word('зашипят', 5),
  masculinePast: Word('зашипел', 5),
  femininePast: Word('зашипела', 5),
  neuterPast: Word('зашипело', 5),
  pluralPast: Word('зашипели', 5),
  imperativeInformal: Word('зашипи', 5),
  imperativeFormal: Word('зашипите', 5),
  imperfect: [],
};

perfectVerbs.set(зашипеть.name.text, зашипеть);

export { зашипеть };