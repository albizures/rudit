import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшуметься: PerfectVerb = {
  name: Word('расшуметься', 6),
  singular1stPerson: Word('расшумлюсь', 7),
  singular2ndPerson: Word('расшумишься', 6),
  singular3rdPerson: Word('расшумится', 6),
  plural1stPerson: Word('расшумимся', 6),
  plural2ndPerson: Word('расшумитесь', 6),
  plural3rdPerson: Word('расшумятся', 6),
  masculinePast: Word('расшумелся', 6),
  femininePast: Word('расшумелась', 6),
  neuterPast: Word('расшумелось', 6),
  pluralPast: Word('расшумелись', 6),
  imperativeInformal: Word('расшумись', 6),
  imperativeFormal: Word('расшумитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расшуметься.name.text, расшуметься);

export { расшуметься };