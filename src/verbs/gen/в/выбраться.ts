import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбраться: PerfectVerb = {
  name: Word('выбраться', 1),
  singular1stPerson: Word('выберусь', 1),
  singular2ndPerson: Word('выберешься', 1),
  singular3rdPerson: Word('выберется', 1),
  plural1stPerson: Word('выберемся', 1),
  plural2ndPerson: Word('выберетесь', 1),
  plural3rdPerson: Word('выберутся', 1),
  masculinePast: Word('выбрался', 1),
  femininePast: Word('выбралась', 1),
  neuterPast: Word('выбралось', 1),
  pluralPast: Word('выбрались', 1),
  imperativeInformal: Word('выберись', 1),
  imperativeFormal: Word('выберитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выбраться.name.text, выбраться);

export { выбраться };