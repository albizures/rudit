import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завязываться: PerfectVerb = {
  name: Word('завязываться', 3),
  singular1stPerson: Word('завязываюсь', 3),
  singular2ndPerson: Word('завязываешься', 3),
  singular3rdPerson: Word('завязывается', 3),
  plural1stPerson: Word('завязываемся', 3),
  plural2ndPerson: Word('завязываетесь', 3),
  plural3rdPerson: Word('завязываются', 3),
  masculinePast: Word('завязывался', 3),
  femininePast: Word('завязывалась', 3),
  neuterPast: Word('завязывалось', 3),
  pluralPast: Word('завязывались', 3),
  imperativeInformal: Word('завязывайся', 3),
  imperativeFormal: Word('завязывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(завязываться.name.text, завязываться);

export { завязываться };