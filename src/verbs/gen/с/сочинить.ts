import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочинить: PerfectVerb = {
  name: Word('сочинить', 5),
  singular1stPerson: Word('сочиню', 5),
  singular2ndPerson: Word('сочинишь', 5),
  singular3rdPerson: Word('сочинит', 5),
  plural1stPerson: Word('сочиним', 5),
  plural2ndPerson: Word('сочините', 5),
  plural3rdPerson: Word('сочинят', 5),
  masculinePast: Word('сочинил', 5),
  femininePast: Word('сочинила', 5),
  neuterPast: Word('сочинило', 5),
  pluralPast: Word('сочинили', 5),
  imperativeInformal: Word('сочини', 5),
  imperativeFormal: Word('сочините', 5),
  imperfect: [],
};

perfectVerbs.set(сочинить.name.text, сочинить);

export { сочинить };