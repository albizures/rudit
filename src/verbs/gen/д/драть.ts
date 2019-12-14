import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драть: PerfectVerb = {
  name: Word('драть', 2),
  singular1stPerson: Word('деру', 3),
  singular2ndPerson: Word('дерёшь', 1),
  singular3rdPerson: Word('дерёт', 1),
  plural1stPerson: Word('дерём', 1),
  plural2ndPerson: Word('дерёте', 1),
  plural3rdPerson: Word('дерут', 3),
  masculinePast: Word('драл', 2),
  femininePast: Word('драла', 4),
  neuterPast: Word('драло', 2),
  pluralPast: Word('драли', 2),
  imperativeInformal: Word('дери', 3),
  imperativeFormal: Word('дерите', 3),
  imperfect: [],
};

perfectVerbs.set(драть.name.text, драть);

export { драть };