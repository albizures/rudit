import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припорошить: PerfectVerb = {
  name: Word('припорошить', 8),
  singular1stPerson: Word('припорошу', 8),
  singular2ndPerson: Word('припорошишь', 8),
  singular3rdPerson: Word('припорошит', 8),
  plural1stPerson: Word('припорошим', 8),
  plural2ndPerson: Word('припорошите', 8),
  plural3rdPerson: Word('припорошат', 8),
  masculinePast: Word('припорошил', 8),
  femininePast: Word('припорошила', 8),
  neuterPast: Word('припорошило', 8),
  pluralPast: Word('припорошили', 8),
  imperativeInformal: Word('припороши', 8),
  imperativeFormal: Word('припорошите', 8),
  imperfect: [],
};

perfectVerbs.set(припорошить.name.text, припорошить);

export { припорошить };