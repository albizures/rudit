import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выспаться: PerfectVerb = {
  name: Word('выспаться', 1),
  singular1stPerson: Word('высплюсь', 1),
  singular2ndPerson: Word('выспишься', 1),
  singular3rdPerson: Word('выспится', 1),
  plural1stPerson: Word('выспимся', 1),
  plural2ndPerson: Word('выспитесь', 1),
  plural3rdPerson: Word('выспятся', 1),
  masculinePast: Word('выспался', 1),
  femininePast: Word('выспалась', 1),
  neuterPast: Word('выспалось', 1),
  pluralPast: Word('выспались', 1),
  imperativeInformal: Word('выспись', 1),
  imperativeFormal: Word('выспитесь', 1),
  imperfect: ['высыпаться'],
};

perfectVerbs.set(выспаться.name.text, выспаться);

export { выспаться };