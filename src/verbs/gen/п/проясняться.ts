import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проясняться: PerfectVerb = {
  name: Word('проясняться', 6),
  singular1stPerson: Word('проясняюсь', 6),
  singular2ndPerson: Word('проясняешься', 6),
  singular3rdPerson: Word('проясняется', 6),
  plural1stPerson: Word('проясняемся', 6),
  plural2ndPerson: Word('проясняетесь', 6),
  plural3rdPerson: Word('проясняются', 6),
  masculinePast: Word('прояснялся', 6),
  femininePast: Word('прояснялась', 6),
  neuterPast: Word('прояснялось', 6),
  pluralPast: Word('прояснялись', 6),
  imperativeInformal: Word('проясняйся', 6),
  imperativeFormal: Word('проясняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проясняться.name.text, проясняться);

export { проясняться };