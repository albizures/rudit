import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просипеть: PerfectVerb = {
  name: Word('просипеть', 6),
  singular1stPerson: Word('просиплю', 7),
  singular2ndPerson: Word('просипишь', 6),
  singular3rdPerson: Word('просипит', 6),
  plural1stPerson: Word('просипим', 6),
  plural2ndPerson: Word('просипите', 6),
  plural3rdPerson: Word('просипят', 6),
  masculinePast: Word('просипел', 6),
  femininePast: Word('просипела', 6),
  neuterPast: Word('просипело', 6),
  pluralPast: Word('просипели', 6),
  imperativeInformal: Word('просипи', 6),
  imperativeFormal: Word('просипите', 6),
  imperfect: [],
};

perfectVerbs.set(просипеть.name.text, просипеть);

export { просипеть };