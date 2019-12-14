import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разливаться: PerfectVerb = {
  name: Word('разливаться', 6),
  singular1stPerson: Word('разливаюсь', 6),
  singular2ndPerson: Word('разливаешься', 6),
  singular3rdPerson: Word('разливается', 6),
  plural1stPerson: Word('разливаемся', 6),
  plural2ndPerson: Word('разливаетесь', 6),
  plural3rdPerson: Word('разливаются', 6),
  masculinePast: Word('разливался', 6),
  femininePast: Word('разливалась', 6),
  neuterPast: Word('разливалось', 6),
  pluralPast: Word('разливались', 6),
  imperativeInformal: Word('разливайся', 6),
  imperativeFormal: Word('разливайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разливаться.name.text, разливаться);

export { разливаться };