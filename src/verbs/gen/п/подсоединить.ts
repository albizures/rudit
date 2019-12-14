import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсоединить: PerfectVerb = {
  name: Word('подсоединить', 9),
  singular1stPerson: Word('подсоединю', 9),
  singular2ndPerson: Word('подсоединишь', 9),
  singular3rdPerson: Word('подсоединит', 9),
  plural1stPerson: Word('подсоединим', 9),
  plural2ndPerson: Word('подсоедините', 9),
  plural3rdPerson: Word('подсоединят', 9),
  masculinePast: Word('подсоединил', 9),
  femininePast: Word('подсоединила', 9),
  neuterPast: Word('подсоединило', 9),
  pluralPast: Word('подсоединили', 9),
  imperativeInformal: Word('подсоедини', 9),
  imperativeFormal: Word('подсоедините', 9),
  imperfect: [],
};

perfectVerbs.set(подсоединить.name.text, подсоединить);

export { подсоединить };