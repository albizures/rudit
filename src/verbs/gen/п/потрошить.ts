import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрошить: PerfectVerb = {
  name: Word('потрошить', 6),
  singular1stPerson: Word('потрошу', 6),
  singular2ndPerson: Word('потрошишь', 6),
  singular3rdPerson: Word('потрошит', 6),
  plural1stPerson: Word('потрошим', 6),
  plural2ndPerson: Word('потрошите', 6),
  plural3rdPerson: Word('потрошат', 6),
  masculinePast: Word('потрошил', 6),
  femininePast: Word('потрошила', 6),
  neuterPast: Word('потрошило', 6),
  pluralPast: Word('потрошили', 6),
  imperativeInformal: Word('потроши', 6),
  imperativeFormal: Word('потрошите', 6),
  imperfect: ['выпотрошить','распотрошить'],
};

perfectVerbs.set(потрошить.name.text, потрошить);

export { потрошить };