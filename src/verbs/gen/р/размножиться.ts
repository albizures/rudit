import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размножиться: PerfectVerb = {
  name: Word('размножиться', 5),
  singular1stPerson: Word('размножусь', 5),
  singular2ndPerson: Word('размножишься', 5),
  singular3rdPerson: Word('размножится', 5),
  plural1stPerson: Word('размножимся', 5),
  plural2ndPerson: Word('размножитесь', 5),
  plural3rdPerson: Word('размножатся', 5),
  masculinePast: Word('размножился', 5),
  femininePast: Word('размножилась', 5),
  neuterPast: Word('размножилось', 5),
  pluralPast: Word('размножились', 5),
  imperativeInformal: Word('размножься', 5),
  imperativeFormal: Word('размножьтесь', 5),
  imperfect: ['размножаться'],
};

perfectVerbs.set(размножиться.name.text, размножиться);

export { размножиться };