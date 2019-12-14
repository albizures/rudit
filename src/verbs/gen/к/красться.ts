import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const красться: PerfectVerb = {
  name: Word('красться', 2),
  singular1stPerson: Word('крадусь', 4),
  singular2ndPerson: Word('крадёшься', 2),
  singular3rdPerson: Word('крадётся', 2),
  plural1stPerson: Word('крадёмся', 2),
  plural2ndPerson: Word('крадётесь', 2),
  plural3rdPerson: Word('крадутся', 4),
  masculinePast: Word('крался', 2),
  femininePast: Word('кралась', 2),
  neuterPast: Word('кралось', 2),
  pluralPast: Word('крались', 2),
  imperativeInformal: Word('крадись', 4),
  imperativeFormal: Word('крадитесь', 4),
  imperfect: ['подкрасться'],
};

perfectVerbs.set(красться.name.text, красться);

export { красться };