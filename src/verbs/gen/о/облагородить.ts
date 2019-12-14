import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облагородить: PerfectVerb = {
  name: Word('облагородить', 7),
  singular1stPerson: Word('облагорожу', 7),
  singular2ndPerson: Word('облагородишь', 7),
  singular3rdPerson: Word('облагородит', 7),
  plural1stPerson: Word('облагородим', 7),
  plural2ndPerson: Word('облагородите', 7),
  plural3rdPerson: Word('облагородят', 7),
  masculinePast: Word('облагородил', 7),
  femininePast: Word('облагородила', 7),
  neuterPast: Word('облагородило', 7),
  pluralPast: Word('облагородили', 7),
  imperativeInformal: Word('облагородь', 7),
  imperativeFormal: Word('облагородьте', 7),
  imperfect: [],
};

perfectVerbs.set(облагородить.name.text, облагородить);

export { облагородить };