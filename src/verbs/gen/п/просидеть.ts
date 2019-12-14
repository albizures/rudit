import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просидеть: PerfectVerb = {
  name: Word('просидеть', 6),
  singular1stPerson: Word('просижу', 6),
  singular2ndPerson: Word('просидишь', 6),
  singular3rdPerson: Word('просидит', 6),
  plural1stPerson: Word('просидим', 6),
  plural2ndPerson: Word('просидите', 6),
  plural3rdPerson: Word('просидят', 6),
  masculinePast: Word('просидел', 6),
  femininePast: Word('просидела', 6),
  neuterPast: Word('просидело', 6),
  pluralPast: Word('просидели', 6),
  imperativeInformal: Word('просиди', 6),
  imperativeFormal: Word('просидите', 6),
  imperfect: [],
};

perfectVerbs.set(просидеть.name.text, просидеть);

export { просидеть };