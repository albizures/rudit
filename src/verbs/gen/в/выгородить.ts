import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгородить: PerfectVerb = {
  name: Word('выгородить', 1),
  singular1stPerson: Word('выгорожу', 1),
  singular2ndPerson: Word('выгородишь', 1),
  singular3rdPerson: Word('выгородит', 1),
  plural1stPerson: Word('выгородим', 1),
  plural2ndPerson: Word('выгородите', 1),
  plural3rdPerson: Word('выгородят', 1),
  masculinePast: Word('выгородил', 1),
  femininePast: Word('выгородила', 1),
  neuterPast: Word('выгородило', 1),
  pluralPast: Word('выгородили', 1),
  imperativeInformal: Word('выгороди', 1),
  imperativeFormal: Word('выгородите', 1),
  imperfect: [],
};

perfectVerbs.set(выгородить.name.text, выгородить);

export { выгородить };