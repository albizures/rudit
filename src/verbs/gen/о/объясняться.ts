import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объясняться: PerfectVerb = {
  name: Word('объясняться', 6),
  singular1stPerson: Word('объясняюсь', 6),
  singular2ndPerson: Word('объясняешься', 6),
  singular3rdPerson: Word('объясняется', 6),
  plural1stPerson: Word('объясняемся', 6),
  plural2ndPerson: Word('объясняетесь', 6),
  plural3rdPerson: Word('объясняются', 6),
  masculinePast: Word('объяснялся', 6),
  femininePast: Word('объяснялась', 6),
  neuterPast: Word('объяснялось', 6),
  pluralPast: Word('объяснялись', 6),
  imperativeInformal: Word('объясняйся', 6),
  imperativeFormal: Word('объясняйтесь', 6),
  imperfect: ['объясниться'],
};

perfectVerbs.set(объясняться.name.text, объясняться);

export { объясняться };