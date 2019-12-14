import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const садануть: PerfectVerb = {
  name: Word('садануть', 5),
  singular1stPerson: Word('садану', 5),
  singular2ndPerson: Word('саданёшь', 1),
  singular3rdPerson: Word('саданёт', 1),
  plural1stPerson: Word('саданём', 1),
  plural2ndPerson: Word('саданёте', 1),
  plural3rdPerson: Word('саданут', 5),
  masculinePast: Word('саданул', 5),
  femininePast: Word('саданула', 5),
  neuterPast: Word('садануло', 5),
  pluralPast: Word('саданули', 5),
  imperativeInformal: Word('садани', 5),
  imperativeFormal: Word('саданите', 5),
  imperfect: [],
};

perfectVerbs.set(садануть.name.text, садануть);

export { садануть };