import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлёбываться: PerfectVerb = {
  name: Word('захлёбываться', 4),
  singular1stPerson: Word('захлёбываюсь', 4),
  singular2ndPerson: Word('захлёбываешься', 4),
  singular3rdPerson: Word('захлёбывается', 4),
  plural1stPerson: Word('захлёбываемся', 4),
  plural2ndPerson: Word('захлёбываетесь', 4),
  plural3rdPerson: Word('захлёбываются', 4),
  masculinePast: Word('захлёбывался', 4),
  femininePast: Word('захлёбывалась', 4),
  neuterPast: Word('захлёбывалось', 4),
  pluralPast: Word('захлёбывались', 4),
  imperativeInformal: Word('захлёбывайся', 4),
  imperativeFormal: Word('захлёбывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(захлёбываться.name.text, захлёбываться);

export { захлёбываться };