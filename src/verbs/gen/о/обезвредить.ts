import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезвредить: PerfectVerb = {
  name: Word('обезвредить', 6),
  singular1stPerson: Word('обезврежу', 6),
  singular2ndPerson: Word('обезвредишь', 6),
  singular3rdPerson: Word('обезвредит', 6),
  plural1stPerson: Word('обезвредим', 6),
  plural2ndPerson: Word('обезвредите', 6),
  plural3rdPerson: Word('обезвредят', 6),
  masculinePast: Word('обезвредил', 6),
  femininePast: Word('обезвредила', 6),
  neuterPast: Word('обезвредило', 6),
  pluralPast: Word('обезвредили', 6),
  imperativeInformal: Word('обезвредь', 6),
  imperativeFormal: Word('обезвредьте', 6),
  imperfect: [],
};

perfectVerbs.set(обезвредить.name.text, обезвредить);

export { обезвредить };