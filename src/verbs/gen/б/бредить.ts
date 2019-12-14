import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бредить: PerfectVerb = {
  name: Word('бредить', 2),
  singular1stPerson: Word('брежу', 2),
  singular2ndPerson: Word('бредишь', 2),
  singular3rdPerson: Word('бредит', 2),
  plural1stPerson: Word('бредим', 2),
  plural2ndPerson: Word('бредите', 2),
  plural3rdPerson: Word('бредят', 2),
  masculinePast: Word('бредил', 2),
  femininePast: Word('бредила', 2),
  neuterPast: Word('бредило', 2),
  pluralPast: Word('бредили', 2),
  imperativeInformal: Word('бредь', 2),
  imperativeFormal: Word('бредьте', 2),
  imperfect: [],
};

perfectVerbs.set(бредить.name.text, бредить);

export { бредить };