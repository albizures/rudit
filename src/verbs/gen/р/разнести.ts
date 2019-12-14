import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнести: PerfectVerb = {
  name: Word('разнести', 7),
  singular1stPerson: Word('разнесу', 6),
  singular2ndPerson: Word('разнесёшь', 6),
  singular3rdPerson: Word('разнесёт', 6),
  plural1stPerson: Word('разнесём', 6),
  plural2ndPerson: Word('разнесёте', 6),
  plural3rdPerson: Word('разнесут', 6),
  masculinePast: Word('разнёс', 4),
  femininePast: Word('разнесла', 7),
  neuterPast: Word('разнесло', 7),
  pluralPast: Word('разнесли', 7),
  imperativeInformal: Word('разнеси', 6),
  imperativeFormal: Word('разнесите', 6),
  imperfect: [],
};

perfectVerbs.set(разнести.name.text, разнести);

export { разнести };