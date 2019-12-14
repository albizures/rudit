import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сидеть: PerfectVerb = {
  name: Word('сидеть', 3),
  singular1stPerson: Word('сижу', 3),
  singular2ndPerson: Word('сидишь', 3),
  singular3rdPerson: Word('сидит', 3),
  plural1stPerson: Word('сидим', 3),
  plural2ndPerson: Word('сидите', 3),
  plural3rdPerson: Word('сидят', 3),
  masculinePast: Word('сидел', 3),
  femininePast: Word('сидела', 3),
  neuterPast: Word('сидело', 3),
  pluralPast: Word('сидели', 3),
  imperativeInformal: Word('сиди', 3),
  imperativeFormal: Word('сидите', 3),
  imperfect: ['сесть','посидеть'],
};

perfectVerbs.set(сидеть.name.text, сидеть);

export { сидеть };