import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поднести: PerfectVerb = {
  name: Word('поднести', 7),
  singular1stPerson: Word('поднесу', 6),
  singular2ndPerson: Word('поднесёшь', 4),
  singular3rdPerson: Word('поднесёт', 4),
  plural1stPerson: Word('поднесём', 4),
  plural2ndPerson: Word('поднесёте', 4),
  plural3rdPerson: Word('поднесут', 6),
  masculinePast: Word('поднёс', 1),
  femininePast: Word('поднесла', 7),
  neuterPast: Word('поднесло', 7),
  pluralPast: Word('поднесли', 7),
  imperativeInformal: Word('поднеси', 6),
  imperativeFormal: Word('поднесите', 6),
  imperfect: [],
};

perfectVerbs.set(поднести.name.text, поднести);

export { поднести };