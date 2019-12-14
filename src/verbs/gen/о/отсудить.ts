import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсудить: PerfectVerb = {
  name: Word('отсудить', 5),
  singular1stPerson: Word('отсужу', 5),
  singular2ndPerson: Word('отсудишь', 3),
  singular3rdPerson: Word('отсудит', 3),
  plural1stPerson: Word('отсудим', 3),
  plural2ndPerson: Word('отсудите', 3),
  plural3rdPerson: Word('отсудят', 3),
  masculinePast: Word('отсудил', 5),
  femininePast: Word('отсудила', 5),
  neuterPast: Word('отсудило', 5),
  pluralPast: Word('отсудили', 5),
  imperativeInformal: Word('отсуди', 5),
  imperativeFormal: Word('отсудите', 5),
  imperfect: [],
};

perfectVerbs.set(отсудить.name.text, отсудить);

export { отсудить };