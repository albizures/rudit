import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбросаться: PerfectVerb = {
  name: Word('разбросаться', 7),
  singular1stPerson: Word('разбросаюсь', 7),
  singular2ndPerson: Word('разбросаешься', 7),
  singular3rdPerson: Word('разбросается', 7),
  plural1stPerson: Word('разбросаемся', 7),
  plural2ndPerson: Word('разбросаетесь', 7),
  plural3rdPerson: Word('разбросаются', 7),
  masculinePast: Word('разбросался', 7),
  femininePast: Word('разбросалась', 7),
  neuterPast: Word('разбросалось', 7),
  pluralPast: Word('разбросались', 7),
  imperativeInformal: Word('разбросайся', 7),
  imperativeFormal: Word('разбросайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(разбросаться.name.text, разбросаться);

export { разбросаться };