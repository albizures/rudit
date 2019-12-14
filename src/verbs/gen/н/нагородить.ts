import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагородить: PerfectVerb = {
  name: Word('нагородить', 7),
  singular1stPerson: Word('нагорожу', 7),
  singular2ndPerson: Word('нагородишь', 5),
  singular3rdPerson: Word('нагородит', 5),
  plural1stPerson: Word('нагородим', 5),
  plural2ndPerson: Word('нагородите', 5),
  plural3rdPerson: Word('нагородят', 5),
  masculinePast: Word('нагородил', 7),
  femininePast: Word('нагородила', 7),
  neuterPast: Word('нагородило', 7),
  pluralPast: Word('нагородили', 7),
  imperativeInformal: Word('нагороди', 7),
  imperativeFormal: Word('нагородите', 7),
  imperfect: [],
};

perfectVerbs.set(нагородить.name.text, нагородить);

export { нагородить };