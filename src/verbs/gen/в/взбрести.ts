import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбрести: PerfectVerb = {
  name: Word('взбрести', 7),
  singular1stPerson: Word('взбреду', 6),
  singular2ndPerson: Word('взбредёшь', 4),
  singular3rdPerson: Word('взбредёт', 4),
  plural1stPerson: Word('взбредём', 4),
  plural2ndPerson: Word('взбредёте', 4),
  plural3rdPerson: Word('взбредут', 6),
  masculinePast: Word('взбрёл', 4),
  femininePast: Word('взбрела', 6),
  neuterPast: Word('взбрело', 6),
  pluralPast: Word('взбрели', 6),
  imperativeInformal: Word('взбреди', 6),
  imperativeFormal: Word('взбредите', 6),
  imperfect: [],
};

perfectVerbs.set(взбрести.name.text, взбрести);

export { взбрести };