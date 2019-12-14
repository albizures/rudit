import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнести: PerfectVerb = {
  name: Word('обнести', 6),
  singular1stPerson: Word('обнесу', 5),
  singular2ndPerson: Word('обнесёшь', 3),
  singular3rdPerson: Word('обнесёт', 3),
  plural1stPerson: Word('обнесём', 3),
  plural2ndPerson: Word('обнесёте', 3),
  plural3rdPerson: Word('обнесут', 5),
  masculinePast: Word('обнёс', 0),
  femininePast: Word('обнесла', 6),
  neuterPast: Word('обнесло', 6),
  pluralPast: Word('обнесли', 6),
  imperativeInformal: Word('обнеси', 5),
  imperativeFormal: Word('обнесите', 5),
  imperfect: [],
};

perfectVerbs.set(обнести.name.text, обнести);

export { обнести };