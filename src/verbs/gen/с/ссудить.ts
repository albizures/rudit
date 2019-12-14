import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссудить: PerfectVerb = {
  name: Word('ссудить', 4),
  singular1stPerson: Word('ссужу', 4),
  singular2ndPerson: Word('ссудишь', 2),
  singular3rdPerson: Word('ссудит', 2),
  plural1stPerson: Word('ссудим', 2),
  plural2ndPerson: Word('ссудите', 2),
  plural3rdPerson: Word('ссудят', 2),
  masculinePast: Word('ссудил', 4),
  femininePast: Word('ссудила', 4),
  neuterPast: Word('ссудило', 4),
  pluralPast: Word('ссудили', 4),
  imperativeInformal: Word('ссуди', 4),
  imperativeFormal: Word('ссудите', 4),
  imperfect: [],
};

perfectVerbs.set(ссудить.name.text, ссудить);

export { ссудить };