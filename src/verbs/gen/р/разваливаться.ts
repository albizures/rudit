import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разваливаться: PerfectVerb = {
  name: Word('разваливаться', 4),
  singular1stPerson: Word('разваливаюсь', 4),
  singular2ndPerson: Word('разваливаешься', 4),
  singular3rdPerson: Word('разваливается', 4),
  plural1stPerson: Word('разваливаемся', 4),
  plural2ndPerson: Word('разваливаетесь', 4),
  plural3rdPerson: Word('разваливаются', 4),
  masculinePast: Word('разваливался', 4),
  femininePast: Word('разваливалась', 4),
  neuterPast: Word('разваливалось', 4),
  pluralPast: Word('разваливались', 4),
  imperativeInformal: Word('разваливайся', 4),
  imperativeFormal: Word('разваливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разваливаться.name.text, разваливаться);

export { разваливаться };