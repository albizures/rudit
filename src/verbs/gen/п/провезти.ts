import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провезти: PerfectVerb = {
  name: Word('провезти', 7),
  singular1stPerson: Word('провезу', 6),
  singular2ndPerson: Word('провезёшь', 4),
  singular3rdPerson: Word('провезёт', 4),
  plural1stPerson: Word('провезём', 4),
  plural2ndPerson: Word('провезёте', 4),
  plural3rdPerson: Word('провезут', 6),
  masculinePast: Word('провез', 4),
  femininePast: Word('провезла', 7),
  neuterPast: Word('провезло', 7),
  pluralPast: Word('провезли', 7),
  imperativeInformal: Word('провези', 6),
  imperativeFormal: Word('провезите', 6),
  imperfect: [],
};

perfectVerbs.set(провезти.name.text, провезти);

export { провезти };