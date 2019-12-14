import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрешаться: PerfectVerb = {
  name: Word('разрешаться', 6),
  singular1stPerson: Word('разрешаюсь', 6),
  singular2ndPerson: Word('разрешаешься', 6),
  singular3rdPerson: Word('разрешается', 6),
  plural1stPerson: Word('разрешаемся', 6),
  plural2ndPerson: Word('разрешаетесь', 6),
  plural3rdPerson: Word('разрешаются', 6),
  masculinePast: Word('разрешался', 6),
  femininePast: Word('разрешалась', 6),
  neuterPast: Word('разрешалось', 6),
  pluralPast: Word('разрешались', 6),
  imperativeInformal: Word('разрешайся', 6),
  imperativeFormal: Word('разрешайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрешаться.name.text, разрешаться);

export { разрешаться };