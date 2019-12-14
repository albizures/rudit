import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остепеняться: PerfectVerb = {
  name: Word('остепеняться', 7),
  singular1stPerson: Word('остепеняюсь', 7),
  singular2ndPerson: Word('остепеняешься', 7),
  singular3rdPerson: Word('остепеняется', 7),
  plural1stPerson: Word('остепеняемся', 7),
  plural2ndPerson: Word('остепеняетесь', 7),
  plural3rdPerson: Word('остепеняются', 7),
  masculinePast: Word('остепенялся', 7),
  femininePast: Word('остепенялась', 7),
  neuterPast: Word('остепенялось', 7),
  pluralPast: Word('остепенялись', 7),
  imperativeInformal: Word('остепеняйся', 7),
  imperativeFormal: Word('остепеняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(остепеняться.name.text, остепеняться);

export { остепеняться };