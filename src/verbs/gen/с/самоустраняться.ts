import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const самоустраняться: PerfectVerb = {
  name: Word('самоустраняться', 10),
  singular1stPerson: Word('самоустраняюсь', 10),
  singular2ndPerson: Word('самоустраняешься', 10),
  singular3rdPerson: Word('самоустраняется', 10),
  plural1stPerson: Word('самоустраняемся', 10),
  plural2ndPerson: Word('самоустраняетесь', 10),
  plural3rdPerson: Word('самоустраняются', 10),
  masculinePast: Word('самоустранялся', 10),
  femininePast: Word('самоустранялась', 10),
  neuterPast: Word('самоустранялось', 10),
  pluralPast: Word('самоустранялись', 10),
  imperativeInformal: Word('самоустраняйся', 10),
  imperativeFormal: Word('самоустраняйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(самоустраняться.name.text, самоустраняться);

export { самоустраняться };