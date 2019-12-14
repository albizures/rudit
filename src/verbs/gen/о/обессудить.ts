import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обессудить: PerfectVerb = {
  name: Word('обессудить', 5),
  singular1stPerson: Word('обессужу', 5),
  singular2ndPerson: Word('обессудишь', 5),
  singular3rdPerson: Word('обессудит', 5),
  plural1stPerson: Word('обессудим', 5),
  plural2ndPerson: Word('обессудите', 5),
  plural3rdPerson: Word('обессудят', 5),
  masculinePast: Word('обессудил', 5),
  femininePast: Word('обессудила', 5),
  neuterPast: Word('обессудило', 5),
  pluralPast: Word('обессудили', 5),
  imperativeInformal: Word('обессудь', 5),
  imperativeFormal: Word('обессудьте', 5),
  imperfect: [],
};

perfectVerbs.set(обессудить.name.text, обессудить);

export { обессудить };