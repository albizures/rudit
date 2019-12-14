import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огорошить: PerfectVerb = {
  name: Word('огорошить', 4),
  singular1stPerson: Word('огорошу', 4),
  singular2ndPerson: Word('огорошишь', 4),
  singular3rdPerson: Word('огорошит', 4),
  plural1stPerson: Word('огорошим', 4),
  plural2ndPerson: Word('огорошите', 4),
  plural3rdPerson: Word('огорошат', 4),
  masculinePast: Word('огорошил', 4),
  femininePast: Word('огорошила', 4),
  neuterPast: Word('огорошило', 4),
  pluralPast: Word('огорошили', 4),
  imperativeInformal: Word('огорошь', 4),
  imperativeFormal: Word('огорошьте', 4),
  imperfect: [],
};

perfectVerbs.set(огорошить.name.text, огорошить);

export { огорошить };