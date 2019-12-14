import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разболтаться: PerfectVerb = {
  name: Word('разболтаться', 7),
  singular1stPerson: Word('разболтаюсь', 7),
  singular2ndPerson: Word('разболтаешься', 7),
  singular3rdPerson: Word('разболтается', 7),
  plural1stPerson: Word('разболтаемся', 7),
  plural2ndPerson: Word('разболтаетесь', 7),
  plural3rdPerson: Word('разболтаются', 7),
  masculinePast: Word('разболтался', 7),
  femininePast: Word('разболталась', 7),
  neuterPast: Word('разболталось', 7),
  pluralPast: Word('разболтались', 7),
  imperativeInformal: Word('разболтайся', 7),
  imperativeFormal: Word('разболтайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разболтаться.name.text, разболтаться);

export { разболтаться };