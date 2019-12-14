import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совещаться: PerfectVerb = {
  name: Word('совещаться', 5),
  singular1stPerson: Word('совещаюсь', 5),
  singular2ndPerson: Word('совещаешься', 5),
  singular3rdPerson: Word('совещается', 5),
  plural1stPerson: Word('совещаемся', 5),
  plural2ndPerson: Word('совещаетесь', 5),
  plural3rdPerson: Word('совещаются', 5),
  masculinePast: Word('совещался', 5),
  femininePast: Word('совещалась', 5),
  neuterPast: Word('совещалось', 5),
  pluralPast: Word('совещались', 5),
  imperativeInformal: Word('совещайся', 5),
  imperativeFormal: Word('совещайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(совещаться.name.text, совещаться);

export { совещаться };