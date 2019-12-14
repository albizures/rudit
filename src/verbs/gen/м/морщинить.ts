import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const морщинить: PerfectVerb = {
  name: Word('морщинить', 4),
  singular1stPerson: Word('морщиню', 4),
  singular2ndPerson: Word('морщинишь', 4),
  singular3rdPerson: Word('морщинит', 4),
  plural1stPerson: Word('морщиним', 4),
  plural2ndPerson: Word('морщините', 4),
  plural3rdPerson: Word('морщинят', 4),
  masculinePast: Word('морщинил', 4),
  femininePast: Word('морщинила', 4),
  neuterPast: Word('морщинило', 4),
  pluralPast: Word('морщинили', 4),
  imperativeInformal: Word('морщинь', 4),
  imperativeFormal: Word('морщиньте', 4),
  imperfect: [],
};

perfectVerbs.set(морщинить.name.text, морщинить);

export { морщинить };