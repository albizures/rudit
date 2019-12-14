import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крошить: PerfectVerb = {
  name: Word('крошить', 4),
  singular1stPerson: Word('крошу', 4),
  singular2ndPerson: Word('крошишь', 2),
  singular3rdPerson: Word('крошит', 2),
  plural1stPerson: Word('крошим', 2),
  plural2ndPerson: Word('крошите', 2),
  plural3rdPerson: Word('крошат', 2),
  masculinePast: Word('крошил', 4),
  femininePast: Word('крошила', 4),
  neuterPast: Word('крошило', 4),
  pluralPast: Word('крошили', 4),
  imperativeInformal: Word('кроши', 4),
  imperativeFormal: Word('крошите', 4),
  imperfect: [],
};

perfectVerbs.set(крошить.name.text, крошить);

export { крошить };