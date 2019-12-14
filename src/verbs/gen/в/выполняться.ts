import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выполняться: PerfectVerb = {
  name: Word('выполняться', 6),
  singular1stPerson: Word('выполняюсь', 6),
  singular2ndPerson: Word('выполняешься', 6),
  singular3rdPerson: Word('выполняется', 6),
  plural1stPerson: Word('выполняемся', 6),
  plural2ndPerson: Word('выполняетесь', 6),
  plural3rdPerson: Word('выполняются', 6),
  masculinePast: Word('выполнялся', 6),
  femininePast: Word('выполнялась', 6),
  neuterPast: Word('выполнялось', 6),
  pluralPast: Word('выполнялись', 6),
  imperativeInformal: Word('выполняйся', 6),
  imperativeFormal: Word('выполняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(выполняться.name.text, выполняться);

export { выполняться };