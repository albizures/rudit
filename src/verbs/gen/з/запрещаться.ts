import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрещаться: PerfectVerb = {
  name: Word('запрещаться', 6),
  singular1stPerson: Word('запрещаюсь', 6),
  singular2ndPerson: Word('запрещаешься', 6),
  singular3rdPerson: Word('запрещается', 6),
  plural1stPerson: Word('запрещаемся', 6),
  plural2ndPerson: Word('запрещаетесь', 6),
  plural3rdPerson: Word('запрещаются', 6),
  masculinePast: Word('запрещался', 6),
  femininePast: Word('запрещалась', 6),
  neuterPast: Word('запрещалось', 6),
  pluralPast: Word('запрещались', 6),
  imperativeInformal: Word('запрещайся', 6),
  imperativeFormal: Word('запрещайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(запрещаться.name.text, запрещаться);

export { запрещаться };