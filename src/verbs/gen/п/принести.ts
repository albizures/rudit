import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принести: PerfectVerb = {
  name: Word('принести', 7),
  singular1stPerson: Word('принесу', 6),
  singular2ndPerson: Word('принесёшь', 4),
  singular3rdPerson: Word('принесёт', 4),
  plural1stPerson: Word('принесём', 4),
  plural2ndPerson: Word('принесёте', 4),
  plural3rdPerson: Word('принесут', 6),
  masculinePast: Word('принёс', 2),
  femininePast: Word('принесла', 7),
  neuterPast: Word('принесло', 7),
  pluralPast: Word('принесли', 7),
  imperativeInformal: Word('принеси', 6),
  imperativeFormal: Word('принесите', 6),
  imperfect: ['приносить'],
};

perfectVerbs.set(принести.name.text, принести);

export { принести };