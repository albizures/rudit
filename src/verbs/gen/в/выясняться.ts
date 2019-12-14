import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выясняться: PerfectVerb = {
  name: Word('выясняться', 5),
  singular1stPerson: Word('выясняюсь', 5),
  singular2ndPerson: Word('выясняешься', 5),
  singular3rdPerson: Word('выясняется', 5),
  plural1stPerson: Word('выясняемся', 5),
  plural2ndPerson: Word('выясняетесь', 5),
  plural3rdPerson: Word('выясняются', 5),
  masculinePast: Word('выяснялся', 5),
  femininePast: Word('выяснялась', 5),
  neuterPast: Word('выяснялось', 5),
  pluralPast: Word('выяснялись', 5),
  imperativeInformal: Word('выясняйся', 5),
  imperativeFormal: Word('выясняйтесь', 5),
  imperfect: ['выясниться'],
};

perfectVerbs.set(выясняться.name.text, выясняться);

export { выясняться };