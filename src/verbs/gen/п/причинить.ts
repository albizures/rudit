import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причинить: PerfectVerb = {
  name: Word('причинить', 6),
  singular1stPerson: Word('причиню', 6),
  singular2ndPerson: Word('причинишь', 6),
  singular3rdPerson: Word('причинит', 6),
  plural1stPerson: Word('причиним', 6),
  plural2ndPerson: Word('причините', 6),
  plural3rdPerson: Word('причинят', 6),
  masculinePast: Word('причинил', 6),
  femininePast: Word('причинила', 6),
  neuterPast: Word('причинило', 6),
  pluralPast: Word('причинили', 6),
  imperativeInformal: Word('причини', 6),
  imperativeFormal: Word('причините', 6),
  imperfect: ['причинять'],
};

perfectVerbs.set(причинить.name.text, причинить);

export { причинить };