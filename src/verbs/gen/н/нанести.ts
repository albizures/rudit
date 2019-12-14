import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нанести: PerfectVerb = {
  name: Word('нанести', 6),
  singular1stPerson: Word('нанесу', 5),
  singular2ndPerson: Word('нанесёшь', 5),
  singular3rdPerson: Word('нанесёт', 5),
  plural1stPerson: Word('нанесём', 5),
  plural2ndPerson: Word('нанесёте', 5),
  plural3rdPerson: Word('нанесут', 5),
  masculinePast: Word('нанёс', 3),
  femininePast: Word('нанесла', 6),
  neuterPast: Word('нанесло', 6),
  pluralPast: Word('нанесли', 6),
  imperativeInformal: Word('нанеси', 5),
  imperativeFormal: Word('нанесите', 5),
  imperfect: [],
};

perfectVerbs.set(нанести.name.text, нанести);

export { нанести };