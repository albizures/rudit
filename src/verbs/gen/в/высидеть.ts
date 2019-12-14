import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высидеть: PerfectVerb = {
  name: Word('высидеть', 1),
  singular1stPerson: Word('высижу', 1),
  singular2ndPerson: Word('высидишь', 1),
  singular3rdPerson: Word('высидит', 1),
  plural1stPerson: Word('высидим', 1),
  plural2ndPerson: Word('высидите', 1),
  plural3rdPerson: Word('высидят', 1),
  masculinePast: Word('высидел', 1),
  femininePast: Word('высидела', 1),
  neuterPast: Word('высидело', 1),
  pluralPast: Word('высидели', 1),
  imperativeInformal: Word('высиди', 1),
  imperativeFormal: Word('высидите', 1),
  imperfect: [],
};

perfectVerbs.set(высидеть.name.text, высидеть);

export { высидеть };