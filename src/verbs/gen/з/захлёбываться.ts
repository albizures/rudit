import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлёбываться: PerfectVerb = {
  name: Word('захлёбываться', 1),
  singular1stPerson: Word('захлёбываюсь', 1),
  singular2ndPerson: Word('захлёбываешься', 1),
  singular3rdPerson: Word('захлёбывается', 1),
  plural1stPerson: Word('захлёбываемся', 1),
  plural2ndPerson: Word('захлёбываетесь', 1),
  plural3rdPerson: Word('захлёбываются', 1),
  masculinePast: Word('захлёбывался', 1),
  femininePast: Word('захлёбывалась', 1),
  neuterPast: Word('захлёбывалось', 1),
  pluralPast: Word('захлёбывались', 1),
  imperativeInformal: Word('захлёбывайся', 1),
  imperativeFormal: Word('захлёбывайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(захлёбываться.name.text, захлёбываться);

export { захлёбываться };