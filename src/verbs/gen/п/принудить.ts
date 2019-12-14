import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принудить: PerfectVerb = {
  name: Word('принудить', 4),
  singular1stPerson: Word('принужу', 4),
  singular2ndPerson: Word('принудишь', 4),
  singular3rdPerson: Word('принудит', 4),
  plural1stPerson: Word('принудим', 4),
  plural2ndPerson: Word('принудите', 4),
  plural3rdPerson: Word('принудят', 4),
  masculinePast: Word('принудил', 4),
  femininePast: Word('принудила', 4),
  neuterPast: Word('принудило', 4),
  pluralPast: Word('принудили', 4),
  imperativeInformal: Word('принудь', 4),
  imperativeFormal: Word('принудьте', 4),
  imperfect: [],
};

perfectVerbs.set(принудить.name.text, принудить);

export { принудить };