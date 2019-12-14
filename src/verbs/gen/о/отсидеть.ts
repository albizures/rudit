import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсидеть: PerfectVerb = {
  name: Word('отсидеть', 5),
  singular1stPerson: Word('отсижу', 5),
  singular2ndPerson: Word('отсидишь', 5),
  singular3rdPerson: Word('отсидит', 5),
  plural1stPerson: Word('отсидим', 5),
  plural2ndPerson: Word('отсидите', 5),
  plural3rdPerson: Word('отсидят', 5),
  masculinePast: Word('отсидел', 5),
  femininePast: Word('отсидела', 5),
  neuterPast: Word('отсидело', 5),
  pluralPast: Word('отсидели', 5),
  imperativeInformal: Word('отсиди', 5),
  imperativeFormal: Word('отсидите', 5),
  imperfect: [],
};

perfectVerbs.set(отсидеть.name.text, отсидеть);

export { отсидеть };