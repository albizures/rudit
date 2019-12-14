import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчинить: PerfectVerb = {
  name: Word('подчинить', 6),
  singular1stPerson: Word('подчиню', 6),
  singular2ndPerson: Word('подчинишь', 6),
  singular3rdPerson: Word('подчинит', 6),
  plural1stPerson: Word('подчиним', 6),
  plural2ndPerson: Word('подчините', 6),
  plural3rdPerson: Word('подчинят', 6),
  masculinePast: Word('подчинил', 6),
  femininePast: Word('подчинила', 6),
  neuterPast: Word('подчинило', 6),
  pluralPast: Word('подчинили', 6),
  imperativeInformal: Word('подчини', 6),
  imperativeFormal: Word('подчините', 6),
  imperfect: [],
};

perfectVerbs.set(подчинить.name.text, подчинить);

export { подчинить };