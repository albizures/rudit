import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увязываться: PerfectVerb = {
  name: Word('увязываться', 2),
  singular1stPerson: Word('увязываюсь', 2),
  singular2ndPerson: Word('увязываешься', 2),
  singular3rdPerson: Word('увязывается', 2),
  plural1stPerson: Word('увязываемся', 2),
  plural2ndPerson: Word('увязываетесь', 2),
  plural3rdPerson: Word('увязываются', 2),
  masculinePast: Word('увязывался', 2),
  femininePast: Word('увязывалась', 2),
  neuterPast: Word('увязывалось', 2),
  pluralPast: Word('увязывались', 2),
  imperativeInformal: Word('увязывайся', 2),
  imperativeFormal: Word('увязывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(увязываться.name.text, увязываться);

export { увязываться };