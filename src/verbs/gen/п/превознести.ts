import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превознести: PerfectVerb = {
  name: Word('превознести', 10),
  singular1stPerson: Word('превознесу', 9),
  singular2ndPerson: Word('превознесёшь', 9),
  singular3rdPerson: Word('превознесёт', 9),
  plural1stPerson: Word('превознесём', 9),
  plural2ndPerson: Word('превознесёте', 9),
  plural3rdPerson: Word('превознесут', 9),
  masculinePast: Word('превознёс', 7),
  femininePast: Word('превознесла', 10),
  neuterPast: Word('превознесло', 10),
  pluralPast: Word('превознесли', 10),
  imperativeInformal: Word('превознеси', 9),
  imperativeFormal: Word('превознесите', 9),
  imperfect: [],
};

perfectVerbs.set(превознести.name.text, превознести);

export { превознести };