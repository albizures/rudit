import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чудить: PerfectVerb = {
  name: Word('чудить', 3),
  singular1stPerson: Word('чужу', 3),
  singular2ndPerson: Word('чудишь', 3),
  singular3rdPerson: Word('чудит', 3),
  plural1stPerson: Word('чудим', 3),
  plural2ndPerson: Word('чудите', 3),
  plural3rdPerson: Word('чудят', 3),
  masculinePast: Word('чудил', 3),
  femininePast: Word('чудила', 3),
  neuterPast: Word('чудило', 3),
  pluralPast: Word('чудили', 3),
  imperativeInformal: Word('чуди', 3),
  imperativeFormal: Word('чудите', 3),
  imperfect: [],
};

perfectVerbs.set(чудить.name.text, чудить);

export { чудить };