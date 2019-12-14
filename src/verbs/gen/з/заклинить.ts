import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклинить: PerfectVerb = {
  name: Word('заклинить', 4),
  singular1stPerson: Word('заклиню', 4),
  singular2ndPerson: Word('заклинишь', 4),
  singular3rdPerson: Word('заклинит', 4),
  plural1stPerson: Word('заклиним', 4),
  plural2ndPerson: Word('заклините', 4),
  plural3rdPerson: Word('заклинят', 4),
  masculinePast: Word('заклинил', 4),
  femininePast: Word('заклинила', 4),
  neuterPast: Word('заклинило', 4),
  pluralPast: Word('заклинили', 4),
  imperativeInformal: Word('заклинь', 4),
  imperativeFormal: Word('заклиньте', 4),
  imperfect: [],
};

perfectVerbs.set(заклинить.name.text, заклинить);

export { заклинить };