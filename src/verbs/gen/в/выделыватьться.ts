import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выделыватьться: PerfectVerb = {
  name: Word('выделыватьться', 3),
  singular1stPerson: Word('выделыватьюсь', 3),
  singular2ndPerson: Word('выделыватьешься', 3),
  singular3rdPerson: Word('выделыватьется', 3),
  plural1stPerson: Word('выделыватьемся', 3),
  plural2ndPerson: Word('выделыватьетесь', 3),
  plural3rdPerson: Word('выделыватьются', 3),
  masculinePast: Word('выделыватьлся', 3),
  femininePast: Word('выделыватьлась', 3),
  neuterPast: Word('выделыватьлось', 3),
  pluralPast: Word('выделыватьлись', 3),
  imperativeInformal: Word('выделыватьйся', 3),
  imperativeFormal: Word('выделыватьйтесь', 3),
  imperfect: ['выделаться'],
};

perfectVerbs.set(выделыватьться.name.text, выделыватьться);

export { выделыватьться };