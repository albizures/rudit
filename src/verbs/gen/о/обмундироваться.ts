import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмундироваться: PerfectVerb = {
  name: Word('обмундироваться', 10),
  singular1stPerson: Word('обмундируюсь', 8),
  singular2ndPerson: Word('обмундируешься', 8),
  singular3rdPerson: Word('обмундируется', 8),
  plural1stPerson: Word('обмундируемся', 8),
  plural2ndPerson: Word('обмундируетесь', 8),
  plural3rdPerson: Word('обмундируются', 8),
  masculinePast: Word('обмундировался', 10),
  femininePast: Word('обмундировалась', 10),
  neuterPast: Word('обмундировалось', 10),
  pluralPast: Word('обмундировались', 10),
  imperativeInformal: Word('обмундируйся', 8),
  imperativeFormal: Word('обмундируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(обмундироваться.name.text, обмундироваться);

export { обмундироваться };