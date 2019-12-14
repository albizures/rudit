import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закипеть: PerfectVerb = {
  name: Word('закипеть', 5),
  singular1stPerson: Word('закиплю', 6),
  singular2ndPerson: Word('закипишь', 5),
  singular3rdPerson: Word('закипит', 5),
  plural1stPerson: Word('закипим', 5),
  plural2ndPerson: Word('закипите', 5),
  plural3rdPerson: Word('закипят', 5),
  masculinePast: Word('закипел', 5),
  femininePast: Word('закипела', 5),
  neuterPast: Word('закипело', 5),
  pluralPast: Word('закипели', 5),
  imperativeInformal: Word('закипи', 5),
  imperativeFormal: Word('закипите', 5),
  imperfect: [],
};

perfectVerbs.set(закипеть.name.text, закипеть);

export { закипеть };