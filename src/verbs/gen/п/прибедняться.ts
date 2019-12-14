import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибедняться: PerfectVerb = {
  name: Word('прибедняться', 7),
  singular1stPerson: Word('прибедняюсь', 7),
  singular2ndPerson: Word('прибедняешься', 7),
  singular3rdPerson: Word('прибедняется', 7),
  plural1stPerson: Word('прибедняемся', 7),
  plural2ndPerson: Word('прибедняетесь', 7),
  plural3rdPerson: Word('прибедняются', 7),
  masculinePast: Word('прибеднялся', 7),
  femininePast: Word('прибеднялась', 7),
  neuterPast: Word('прибеднялось', 7),
  pluralPast: Word('прибеднялись', 7),
  imperativeInformal: Word('прибедняйся', 7),
  imperativeFormal: Word('прибедняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(прибедняться.name.text, прибедняться);

export { прибедняться };