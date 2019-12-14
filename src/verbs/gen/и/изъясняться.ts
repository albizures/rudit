import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъясняться: PerfectVerb = {
  name: Word('изъясняться', 6),
  singular1stPerson: Word('изъясняюсь', 6),
  singular2ndPerson: Word('изъясняешься', 6),
  singular3rdPerson: Word('изъясняется', 6),
  plural1stPerson: Word('изъясняемся', 6),
  plural2ndPerson: Word('изъясняетесь', 6),
  plural3rdPerson: Word('изъясняются', 6),
  masculinePast: Word('изъяснялся', 6),
  femininePast: Word('изъяснялась', 6),
  neuterPast: Word('изъяснялось', 6),
  pluralPast: Word('изъяснялись', 6),
  imperativeInformal: Word('изъясняйся', 6),
  imperativeFormal: Word('изъясняйтесь', 6),
  imperfect: ['изъясниться'],
};

perfectVerbs.set(изъясняться.name.text, изъясняться);

export { изъясняться };