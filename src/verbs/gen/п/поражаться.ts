import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поражаться: PerfectVerb = {
  name: Word('поражаться', 5),
  singular1stPerson: Word('поражаюсь', 5),
  singular2ndPerson: Word('поражаешься', 5),
  singular3rdPerson: Word('поражается', 5),
  plural1stPerson: Word('поражаемся', 5),
  plural2ndPerson: Word('поражаетесь', 5),
  plural3rdPerson: Word('поражаются', 5),
  masculinePast: Word('поражался', 5),
  femininePast: Word('поражалась', 5),
  neuterPast: Word('поражалось', 5),
  pluralPast: Word('поражались', 5),
  imperativeInformal: Word('поражайся', 5),
  imperativeFormal: Word('поражайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(поражаться.name.text, поражаться);

export { поражаться };