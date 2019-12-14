import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгуливаться: PerfectVerb = {
  name: Word('разгуливаться', 4),
  singular1stPerson: Word('разгуливаюсь', 4),
  singular2ndPerson: Word('разгуливаешься', 4),
  singular3rdPerson: Word('разгуливается', 4),
  plural1stPerson: Word('разгуливаемся', 4),
  plural2ndPerson: Word('разгуливаетесь', 4),
  plural3rdPerson: Word('разгуливаются', 4),
  masculinePast: Word('разгуливался', 4),
  femininePast: Word('разгуливалась', 4),
  neuterPast: Word('разгуливалось', 4),
  pluralPast: Word('разгуливались', 4),
  imperativeInformal: Word('разгуливайся', 4),
  imperativeFormal: Word('разгуливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разгуливаться.name.text, разгуливаться);

export { разгуливаться };