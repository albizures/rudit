import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const куститься: PerfectVerb = {
  name: Word('куститься', 4),
  singular1stPerson: Word('кущусь', 3),
  singular2ndPerson: Word('кустишься', 4),
  singular3rdPerson: Word('кустится', 4),
  plural1stPerson: Word('кустимся', 4),
  plural2ndPerson: Word('куститесь', 4),
  plural3rdPerson: Word('кустятся', 4),
  masculinePast: Word('кустился', 4),
  femininePast: Word('кустилась', 4),
  neuterPast: Word('кустилось', 4),
  pluralPast: Word('кустились', 4),
  imperativeInformal: Word('кустись', 4),
  imperativeFormal: Word('куститесь', 4),
  imperfect: [],
};

perfectVerbs.set(куститься.name.text, куститься);

export { куститься };