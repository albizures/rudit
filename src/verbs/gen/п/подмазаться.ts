import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмазаться: PerfectVerb = {
  name: Word('подмазаться', 4),
  singular1stPerson: Word('подмажусь', 4),
  singular2ndPerson: Word('подмажешься', 4),
  singular3rdPerson: Word('подмажется', 4),
  plural1stPerson: Word('подмажемся', 4),
  plural2ndPerson: Word('подмажетесь', 4),
  plural3rdPerson: Word('подмажутся', 4),
  masculinePast: Word('подмазался', 4),
  femininePast: Word('подмазалась', 4),
  neuterPast: Word('подмазалось', 4),
  pluralPast: Word('подмазались', 4),
  imperativeInformal: Word('подмажься', 4),
  imperativeFormal: Word('подмажьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подмазаться.name.text, подмазаться);

export { подмазаться };