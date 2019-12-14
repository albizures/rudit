import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсудить: PerfectVerb = {
  name: Word('обсудить', 5),
  singular1stPerson: Word('обсужу', 5),
  singular2ndPerson: Word('обсудишь', 3),
  singular3rdPerson: Word('обсудит', 3),
  plural1stPerson: Word('обсудим', 3),
  plural2ndPerson: Word('обсудите', 3),
  plural3rdPerson: Word('обсудят', 3),
  masculinePast: Word('обсудил', 5),
  femininePast: Word('обсудила', 5),
  neuterPast: Word('обсудило', 5),
  pluralPast: Word('обсудили', 5),
  imperativeInformal: Word('обсуди', 5),
  imperativeFormal: Word('обсудите', 5),
  imperfect: ['обсуждать'],
};

perfectVerbs.set(обсудить.name.text, обсудить);

export { обсудить };