import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добраться: PerfectVerb = {
  name: Word('добраться', 4),
  singular1stPerson: Word('доберусь', 5),
  singular2ndPerson: Word('доберёшься', 5),
  singular3rdPerson: Word('доберётся', 5),
  plural1stPerson: Word('доберёмся', 5),
  plural2ndPerson: Word('доберётесь', 5),
  plural3rdPerson: Word('доберутся', 5),
  masculinePast: Word('добрался', 4),
  femininePast: Word('добралась', 6),
  neuterPast: Word('добралось,добрало'сь', 4),
  pluralPast: Word('добрались,добрали'сь', 4),
  imperativeInformal: Word('доберись', 5),
  imperativeFormal: Word('доберитесь', 5),
  imperfect: ['добираться'],
};

perfectVerbs.set(добраться.name.text, добраться);

export { добраться };