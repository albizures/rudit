import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрушаться: PerfectVerb = {
  name: Word('разрушаться', 6),
  singular1stPerson: Word('разрушаюсь', 6),
  singular2ndPerson: Word('разрушаешься', 6),
  singular3rdPerson: Word('разрушается', 6),
  plural1stPerson: Word('разрушаемся', 6),
  plural2ndPerson: Word('разрушаетесь', 6),
  plural3rdPerson: Word('разрушаются', 6),
  masculinePast: Word('разрушался', 6),
  femininePast: Word('разрушалась', 6),
  neuterPast: Word('разрушалось', 6),
  pluralPast: Word('разрушались', 6),
  imperativeInformal: Word('разрушайся', 6),
  imperativeFormal: Word('разрушайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрушаться.name.text, разрушаться);

export { разрушаться };