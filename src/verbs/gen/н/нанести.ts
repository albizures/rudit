import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нанести: PerfectVerb = {
  name: Word('нанести', 6),
  singular1stPerson: Word('нанесу', 5),
  singular2ndPerson: Word('нанесёшь', 1),
  singular3rdPerson: Word('нанесёт', 1),
  plural1stPerson: Word('нанесём', 1),
  plural2ndPerson: Word('нанесёте', 1),
  plural3rdPerson: Word('нанесут', 5),
  masculinePast: Word('нанёс', 1),
  femininePast: Word('нанесла', 6),
  neuterPast: Word('нанесло', 6),
  pluralPast: Word('нанесли', 6),
  imperativeInformal: Word('нанеси', 5),
  imperativeFormal: Word('нанесите', 5),
  imperfect: [],
};

perfectVerbs.set(нанести.name.text, нанести);

export { нанести };