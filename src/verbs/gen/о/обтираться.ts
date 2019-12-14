import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтираться: PerfectVerb = {
  name: Word('обтираться', 5),
  singular1stPerson: Word('обтираюсь', 5),
  singular2ndPerson: Word('обтираешься', 5),
  singular3rdPerson: Word('обтирается', 5),
  plural1stPerson: Word('обтираемся', 5),
  plural2ndPerson: Word('обтираетесь', 5),
  plural3rdPerson: Word('обтираются', 5),
  masculinePast: Word('обтирался', 5),
  femininePast: Word('обтиралась', 5),
  neuterPast: Word('обтиралось', 5),
  pluralPast: Word('обтирались', 5),
  imperativeInformal: Word('обтирайся', 5),
  imperativeFormal: Word('обтирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обтираться.name.text, обтираться);

export { обтираться };