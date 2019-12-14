import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвязываться: PerfectVerb = {
  name: Word('подвязываться', 4),
  singular1stPerson: Word('подвязываюсь', 4),
  singular2ndPerson: Word('подвязываешься', 4),
  singular3rdPerson: Word('подвязывается', 4),
  plural1stPerson: Word('подвязываемся', 4),
  plural2ndPerson: Word('подвязываетесь', 4),
  plural3rdPerson: Word('подвязываются', 4),
  masculinePast: Word('подвязывался', 4),
  femininePast: Word('подвязывалась', 4),
  neuterPast: Word('подвязывалось', 4),
  pluralPast: Word('подвязывались', 4),
  imperativeInformal: Word('подвязывайся', 4),
  imperativeFormal: Word('подвязывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подвязываться.name.text, подвязываться);

export { подвязываться };