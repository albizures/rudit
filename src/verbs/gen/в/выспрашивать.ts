import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выспрашивать: PerfectVerb = {
  name: Word('выспрашивать', 5),
  singular1stPerson: Word('выспрашиваю', 5),
  singular2ndPerson: Word('выспрашиваешь', 5),
  singular3rdPerson: Word('выспрашивает', 5),
  plural1stPerson: Word('выспрашиваем', 5),
  plural2ndPerson: Word('выспрашиваете', 5),
  plural3rdPerson: Word('выспрашивают', 5),
  masculinePast: Word('выспрашивал', 5),
  femininePast: Word('выспрашивала', 5),
  neuterPast: Word('выспрашивало', 5),
  pluralPast: Word('выспрашивали', 5),
  imperativeInformal: Word('выспрашивай', 5),
  imperativeFormal: Word('выспрашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выспрашивать.name.text, выспрашивать);

export { выспрашивать };