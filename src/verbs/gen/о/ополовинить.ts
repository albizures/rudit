import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ополовинить: PerfectVerb = {
  name: Word('ополовинить', 6),
  singular1stPerson: Word('ополовиню', 6),
  singular2ndPerson: Word('ополовинишь', 6),
  singular3rdPerson: Word('ополовинит', 6),
  plural1stPerson: Word('ополовиним', 6),
  plural2ndPerson: Word('ополовините', 6),
  plural3rdPerson: Word('ополовинят', 6),
  masculinePast: Word('ополовинил', 6),
  femininePast: Word('ополовинила', 6),
  neuterPast: Word('ополовинило', 6),
  pluralPast: Word('ополовинили', 6),
  imperativeInformal: Word('ополовинь', 6),
  imperativeFormal: Word('ополовиньте', 6),
  imperfect: [],
};

perfectVerbs.set(ополовинить.name.text, ополовинить);

export { ополовинить };