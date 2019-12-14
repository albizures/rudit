import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрастаться: PerfectVerb = {
  name: Word('разрастаться', 7),
  singular1stPerson: Word('разрастаюсь', 7),
  singular2ndPerson: Word('разрастаешься', 7),
  singular3rdPerson: Word('разрастается', 7),
  plural1stPerson: Word('разрастаемся', 7),
  plural2ndPerson: Word('разрастаетесь', 7),
  plural3rdPerson: Word('разрастаются', 7),
  masculinePast: Word('разрастался', 7),
  femininePast: Word('разрасталась', 7),
  neuterPast: Word('разрасталось', 7),
  pluralPast: Word('разрастались', 7),
  imperativeInformal: Word('разрастайся', 7),
  imperativeFormal: Word('разрастайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разрастаться.name.text, разрастаться);

export { разрастаться };