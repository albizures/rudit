import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпоясываться: PerfectVerb = {
  name: Word('подпоясываться', 5),
  singular1stPerson: Word('подпоясываюсь', 5),
  singular2ndPerson: Word('подпоясываешься', 5),
  singular3rdPerson: Word('подпоясывается', 5),
  plural1stPerson: Word('подпоясываемся', 5),
  plural2ndPerson: Word('подпоясываетесь', 5),
  plural3rdPerson: Word('подпоясываются', 5),
  masculinePast: Word('подпоясывался', 5),
  femininePast: Word('подпоясывалась', 5),
  neuterPast: Word('подпоясывалось', 5),
  pluralPast: Word('подпоясывались', 5),
  imperativeInformal: Word('подпоясывайся', 5),
  imperativeFormal: Word('подпоясывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подпоясываться.name.text, подпоясываться);

export { подпоясываться };