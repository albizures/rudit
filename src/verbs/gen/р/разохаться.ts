import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разохаться: PerfectVerb = {
  name: Word('разохаться', 3),
  singular1stPerson: Word('разохаюсь', 3),
  singular2ndPerson: Word('разохаешься', 3),
  singular3rdPerson: Word('разохается', 3),
  plural1stPerson: Word('разохаемся', 3),
  plural2ndPerson: Word('разохаетесь', 3),
  plural3rdPerson: Word('разохаются', 3),
  masculinePast: Word('разохался', 3),
  femininePast: Word('разохалась', 3),
  neuterPast: Word('разохалось', 3),
  pluralPast: Word('разохались', 3),
  imperativeInformal: Word('разохайся', 3),
  imperativeFormal: Word('разохайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(разохаться.name.text, разохаться);

export { разохаться };