import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжираться: PerfectVerb = {
  name: Word('обжираться', 5),
  singular1stPerson: Word('обжираюсь', 5),
  singular2ndPerson: Word('обжираешься', 5),
  singular3rdPerson: Word('обжирается', 5),
  plural1stPerson: Word('обжираемся', 5),
  plural2ndPerson: Word('обжираетесь', 5),
  plural3rdPerson: Word('обжираются', 5),
  masculinePast: Word('обжирался', 5),
  femininePast: Word('обжиралась', 5),
  neuterPast: Word('обжиралось', 5),
  pluralPast: Word('обжирались', 5),
  imperativeInformal: Word('обжирайся', 5),
  imperativeFormal: Word('обжирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обжираться.name.text, обжираться);

export { обжираться };