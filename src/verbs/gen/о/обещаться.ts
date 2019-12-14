import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обещаться: PerfectVerb = {
  name: Word('обещаться', 4),
  singular1stPerson: Word('обещаюсь', 4),
  singular2ndPerson: Word('обещаешься', 4),
  singular3rdPerson: Word('обещается', 4),
  plural1stPerson: Word('обещаемся', 4),
  plural2ndPerson: Word('обещаетесь', 4),
  plural3rdPerson: Word('обещаются', 4),
  masculinePast: Word('обещался', 4),
  femininePast: Word('обещалась', 4),
  neuterPast: Word('обещалось', 4),
  pluralPast: Word('обещались', 4),
  imperativeInformal: Word('обещайся', 4),
  imperativeFormal: Word('обещайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(обещаться.name.text, обещаться);

export { обещаться };