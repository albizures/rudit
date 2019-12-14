import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угореть: PerfectVerb = {
  name: Word('угореть', 4),
  singular1stPerson: Word('угорю', 4),
  singular2ndPerson: Word('угоришь', 4),
  singular3rdPerson: Word('угорит', 4),
  plural1stPerson: Word('угорим', 4),
  plural2ndPerson: Word('угорите', 4),
  plural3rdPerson: Word('угорят', 4),
  masculinePast: Word('угорел', 4),
  femininePast: Word('угорела', 4),
  neuterPast: Word('угорело', 4),
  pluralPast: Word('угорели', 4),
  imperativeInformal: Word('угори', 4),
  imperativeFormal: Word('угорите', 4),
  imperfect: [],
};

perfectVerbs.set(угореть.name.text, угореть);

export { угореть };