import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const греться: PerfectVerb = {
  name: Word('греться', 2),
  singular1stPerson: Word('греюсь', 2),
  singular2ndPerson: Word('греешься', 2),
  singular3rdPerson: Word('греется', 2),
  plural1stPerson: Word('греемся', 2),
  plural2ndPerson: Word('греетесь', 2),
  plural3rdPerson: Word('греются', 2),
  masculinePast: Word('грелся', 2),
  femininePast: Word('грелась', 2),
  neuterPast: Word('грелось', 2),
  pluralPast: Word('грелись', 2),
  imperativeInformal: Word('грейся', 2),
  imperativeFormal: Word('грейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(греться.name.text, греться);

export { греться };