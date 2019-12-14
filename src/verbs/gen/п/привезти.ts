import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привезти: PerfectVerb = {
  name: Word('привезти', 7),
  singular1stPerson: Word('привезу', 6),
  singular2ndPerson: Word('привезёшь', 6),
  singular3rdPerson: Word('привезёт', 6),
  plural1stPerson: Word('привезём', 6),
  plural2ndPerson: Word('привезёте', 6),
  plural3rdPerson: Word('привезут', 6),
  masculinePast: Word('привёз', 4),
  femininePast: Word('привезла', 7),
  neuterPast: Word('привезло', 7),
  pluralPast: Word('привезли', 7),
  imperativeInformal: Word('привези', 6),
  imperativeFormal: Word('привезите', 6),
  imperfect: ['привозить'],
};

perfectVerbs.set(привезти.name.text, привезти);

export { привезти };