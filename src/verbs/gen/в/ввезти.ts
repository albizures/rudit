import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввезти: PerfectVerb = {
  name: Word('ввезти', 5),
  singular1stPerson: Word('ввезу', 4),
  singular2ndPerson: Word('ввезёшь', 4),
  singular3rdPerson: Word('ввезёт', 4),
  plural1stPerson: Word('ввезём', 4),
  plural2ndPerson: Word('ввезёте', 4),
  plural3rdPerson: Word('ввезут', 4),
  masculinePast: Word('ввёз', 2),
  femininePast: Word('ввезла', 5),
  neuterPast: Word('ввезло', 5),
  pluralPast: Word('ввезли', 5),
  imperativeInformal: Word('ввези', 4),
  imperativeFormal: Word('ввезите', 4),
  imperfect: [],
};

perfectVerbs.set(ввезти.name.text, ввезти);

export { ввезти };