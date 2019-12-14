import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сипеть: PerfectVerb = {
  name: Word('сипеть', 3),
  singular1stPerson: Word('сиплю', 4),
  singular2ndPerson: Word('сипишь', 3),
  singular3rdPerson: Word('сипит', 3),
  plural1stPerson: Word('сипим', 3),
  plural2ndPerson: Word('сипите', 3),
  plural3rdPerson: Word('сипят', 3),
  masculinePast: Word('сипел', 3),
  femininePast: Word('сипела', 3),
  neuterPast: Word('сипело', 3),
  pluralPast: Word('сипели', 3),
  imperativeInformal: Word('сипи', 3),
  imperativeFormal: Word('сипите', 3),
  imperfect: [],
};

perfectVerbs.set(сипеть.name.text, сипеть);

export { сипеть };