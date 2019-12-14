import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнежничаться: PerfectVerb = {
  name: Word('разнежничаться', 4),
  singular1stPerson: Word('разнежничаюсь', 4),
  singular2ndPerson: Word('разнежничаешься', 4),
  singular3rdPerson: Word('разнежничается', 4),
  plural1stPerson: Word('разнежничаемся', 4),
  plural2ndPerson: Word('разнежничаетесь', 4),
  plural3rdPerson: Word('разнежничаются', 4),
  masculinePast: Word('разнежничался', 4),
  femininePast: Word('разнежничалась', 4),
  neuterPast: Word('разнежничалось', 4),
  pluralPast: Word('разнежничались', 4),
  imperativeInformal: Word('разнежничайся', 4),
  imperativeFormal: Word('разнежничайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разнежничаться.name.text, разнежничаться);

export { разнежничаться };