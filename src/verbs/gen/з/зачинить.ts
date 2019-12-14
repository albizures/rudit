import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачинить: PerfectVerb = {
  name: Word('зачинить', 5),
  singular1stPerson: Word('зачиню', 5),
  singular2ndPerson: Word('зачинишь', 3),
  singular3rdPerson: Word('зачинит', 3),
  plural1stPerson: Word('зачиним', 3),
  plural2ndPerson: Word('зачините', 3),
  plural3rdPerson: Word('зачинят', 3),
  masculinePast: Word('зачинил', 5),
  femininePast: Word('зачинила', 5),
  neuterPast: Word('зачинило', 5),
  pluralPast: Word('зачинили', 5),
  imperativeInformal: Word('зачини', 5),
  imperativeFormal: Word('зачините', 5),
  imperfect: [],
};

perfectVerbs.set(зачинить.name.text, зачинить);

export { зачинить };