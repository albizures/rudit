import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отказаться: PerfectVerb = {
  name: Word('отказаться', 5),
  singular1stPerson: Word('откажусь', 5),
  singular2ndPerson: Word('откажешься', 3),
  singular3rdPerson: Word('откажется', 3),
  plural1stPerson: Word('откажемся', 3),
  plural2ndPerson: Word('откажетесь', 3),
  plural3rdPerson: Word('откажутся', 3),
  masculinePast: Word('отказался', 5),
  femininePast: Word('отказалась', 5),
  neuterPast: Word('отказалось', 5),
  pluralPast: Word('отказались', 5),
  imperativeInformal: Word('откажись', 5),
  imperativeFormal: Word('откажитесь', 5),
  imperfect: ['отказываться'],
};

perfectVerbs.set(отказаться.name.text, отказаться);

export { отказаться };