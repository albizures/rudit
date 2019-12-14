import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огородить: PerfectVerb = {
  name: Word('огородить', 6),
  singular1stPerson: Word('огорожу', 6),
  singular2ndPerson: Word('огородишь', 4),
  singular3rdPerson: Word('огородит', 4),
  plural1stPerson: Word('огородим', 4),
  plural2ndPerson: Word('огородите', 4),
  plural3rdPerson: Word('огородят', 4),
  masculinePast: Word('огородил', 6),
  femininePast: Word('огородила', 6),
  neuterPast: Word('огородило', 6),
  pluralPast: Word('огородили', 6),
  imperativeInformal: Word('огороди', 6),
  imperativeFormal: Word('огородите', 6),
  imperfect: [],
};

perfectVerbs.set(огородить.name.text, огородить);

export { огородить };