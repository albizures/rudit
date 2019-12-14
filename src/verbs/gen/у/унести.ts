import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унести: PerfectVerb = {
  name: Word('унести', 5),
  singular1stPerson: Word('унесу', 4),
  singular2ndPerson: Word('унесёшь', 4),
  singular3rdPerson: Word('унесёт', 4),
  plural1stPerson: Word('унесём', 4),
  plural2ndPerson: Word('унесёте', 4),
  plural3rdPerson: Word('унесут', 4),
  masculinePast: Word('унёс', 2),
  femininePast: Word('унесла', 5),
  neuterPast: Word('унесло', 5),
  pluralPast: Word('унесли', 5),
  imperativeInformal: Word('унеси', 4),
  imperativeFormal: Word('унесите', 4),
  imperfect: ['уносить'],
};

perfectVerbs.set(унести.name.text, унести);

export { унести };