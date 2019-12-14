import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выражаться: PerfectVerb = {
  name: Word('выражаться', 5),
  singular1stPerson: Word('выражаюсь', 5),
  singular2ndPerson: Word('выражаешься', 5),
  singular3rdPerson: Word('выражается', 5),
  plural1stPerson: Word('выражаемся', 5),
  plural2ndPerson: Word('выражаетесь', 5),
  plural3rdPerson: Word('выражаются', 5),
  masculinePast: Word('выражался', 5),
  femininePast: Word('выражалась', 5),
  neuterPast: Word('выражалось', 5),
  pluralPast: Word('выражались', 5),
  imperativeInformal: Word('выражайся', 5),
  imperativeFormal: Word('выражайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выражаться.name.text, выражаться);

export { выражаться };