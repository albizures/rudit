import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учинить: PerfectVerb = {
  name: Word('учинить', 4),
  singular1stPerson: Word('учиню', 4),
  singular2ndPerson: Word('учинишь', 4),
  singular3rdPerson: Word('учинит', 4),
  plural1stPerson: Word('учиним', 4),
  plural2ndPerson: Word('учините', 4),
  plural3rdPerson: Word('учинят', 4),
  masculinePast: Word('учинил', 4),
  femininePast: Word('учинила', 4),
  neuterPast: Word('учинило', 4),
  pluralPast: Word('учинили', 4),
  imperativeInformal: Word('учини', 4),
  imperativeFormal: Word('учините', 4),
  imperfect: [],
};

perfectVerbs.set(учинить.name.text, учинить);

export { учинить };