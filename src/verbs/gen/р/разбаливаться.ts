import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбаливаться: PerfectVerb = {
  name: Word('разбаливаться', 4),
  singular1stPerson: Word('разбаливаюсь', 4),
  singular2ndPerson: Word('разбаливаешься', 4),
  singular3rdPerson: Word('разбаливается', 4),
  plural1stPerson: Word('разбаливаемся', 4),
  plural2ndPerson: Word('разбаливаетесь', 4),
  plural3rdPerson: Word('разбаливаются', 4),
  masculinePast: Word('разбаливался', 4),
  femininePast: Word('разбаливалась', 4),
  neuterPast: Word('разбаливалось', 4),
  pluralPast: Word('разбаливались', 4),
  imperativeInformal: Word('разбаливайся', 4),
  imperativeFormal: Word('разбаливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разбаливаться.name.text, разбаливаться);

export { разбаливаться };