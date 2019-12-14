import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запорошить: PerfectVerb = {
  name: Word('запорошить', 7),
  singular1stPerson: Word('запорошу', 7),
  singular2ndPerson: Word('запорошишь', 7),
  singular3rdPerson: Word('запорошит', 7),
  plural1stPerson: Word('запорошим', 7),
  plural2ndPerson: Word('запорошите', 7),
  plural3rdPerson: Word('запорошат', 7),
  masculinePast: Word('запорошил', 7),
  femininePast: Word('запорошила', 7),
  neuterPast: Word('запорошило', 7),
  pluralPast: Word('запорошили', 7),
  imperativeInformal: Word('запороши', 7),
  imperativeFormal: Word('запорошите', 7),
  imperfect: [],
};

perfectVerbs.set(запорошить.name.text, запорошить);

export { запорошить };