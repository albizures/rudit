import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгородить: PerfectVerb = {
  name: Word('отгородить', 7),
  singular1stPerson: Word('отгорожу', 7),
  singular2ndPerson: Word('отгородишь', 5),
  singular3rdPerson: Word('отгородит', 5),
  plural1stPerson: Word('отгородим', 5),
  plural2ndPerson: Word('отгородите', 5),
  plural3rdPerson: Word('отгородят', 5),
  masculinePast: Word('отгородил', 7),
  femininePast: Word('отгородила', 7),
  neuterPast: Word('отгородило', 7),
  pluralPast: Word('отгородили', 7),
  imperativeInformal: Word('отгороди', 7),
  imperativeFormal: Word('отгородите', 7),
  imperfect: [],
};

perfectVerbs.set(отгородить.name.text, отгородить);

export { отгородить };