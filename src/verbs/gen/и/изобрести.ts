import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изобрести: PerfectVerb = {
  name: Word('изобрести', 8),
  singular1stPerson: Word('изобрету', 7),
  singular2ndPerson: Word('изобретёшь', 5),
  singular3rdPerson: Word('изобретёт', 5),
  plural1stPerson: Word('изобретём', 5),
  plural2ndPerson: Word('изобретёте', 5),
  plural3rdPerson: Word('изобретут', 7),
  masculinePast: Word('изобрёл', 0),
  femininePast: Word('изобрела', 7),
  neuterPast: Word('изобрело', 7),
  pluralPast: Word('изобрели', 7),
  imperativeInformal: Word('изобрети', 7),
  imperativeFormal: Word('изобретите', 7),
  imperfect: [],
};

perfectVerbs.set(изобрести.name.text, изобрести);

export { изобрести };