import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разломаться: PerfectVerb = {
  name: Word('разломаться', 6),
  singular1stPerson: Word('разломаюсь', 6),
  singular2ndPerson: Word('разломаешься', 6),
  singular3rdPerson: Word('разломается', 6),
  plural1stPerson: Word('разломаемся', 6),
  plural2ndPerson: Word('разломаетесь', 6),
  plural3rdPerson: Word('разломаются', 6),
  masculinePast: Word('разломался', 6),
  femininePast: Word('разломалась', 6),
  neuterPast: Word('разломалось', 6),
  pluralPast: Word('разломались', 6),
  imperativeInformal: Word('разломайся', 6),
  imperativeFormal: Word('разломайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разломаться.name.text, разломаться);

export { разломаться };