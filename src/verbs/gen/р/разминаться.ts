import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разминаться: PerfectVerb = {
  name: Word('разминаться', 6),
  singular1stPerson: Word('разминаюсь', 6),
  singular2ndPerson: Word('разминаешься', 6),
  singular3rdPerson: Word('разминается', 6),
  plural1stPerson: Word('разминаемся', 6),
  plural2ndPerson: Word('разминаетесь', 6),
  plural3rdPerson: Word('разминаются', 6),
  masculinePast: Word('разминался', 6),
  femininePast: Word('разминалась', 6),
  neuterPast: Word('разминалось', 6),
  pluralPast: Word('разминались', 6),
  imperativeInformal: Word('разминайся', 6),
  imperativeFormal: Word('разминайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разминаться.name.text, разминаться);

export { разминаться };