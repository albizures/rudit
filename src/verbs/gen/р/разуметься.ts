import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разуметься: PerfectVerb = {
  name: Word('разуметься', 5),
  singular1stPerson: Word('разумеюсь', 5),
  singular2ndPerson: Word('разумеешься', 5),
  singular3rdPerson: Word('разумеется', 5),
  plural1stPerson: Word('разумеемся', 5),
  plural2ndPerson: Word('разумеетесь', 5),
  plural3rdPerson: Word('разумеются', 5),
  masculinePast: Word('разумелся', 5),
  femininePast: Word('разумелась', 5),
  neuterPast: Word('разумелось', 5),
  pluralPast: Word('разумелись', 5),
  imperativeInformal: Word('разумейся', 5),
  imperativeFormal: Word('разумейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разуметься.name.text, разуметься);

export { разуметься };