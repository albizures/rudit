import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкореняться: PerfectVerb = {
  name: Word('вкореняться', 6),
  singular1stPerson: Word('вкореняюсь', 6),
  singular2ndPerson: Word('вкореняешься', 6),
  singular3rdPerson: Word('вкореняется', 6),
  plural1stPerson: Word('вкореняемся', 6),
  plural2ndPerson: Word('вкореняетесь', 6),
  plural3rdPerson: Word('вкореняются', 6),
  masculinePast: Word('вкоренялся', 6),
  femininePast: Word('вкоренялась', 6),
  neuterPast: Word('вкоренялось', 6),
  pluralPast: Word('вкоренялись', 6),
  imperativeInformal: Word('вкореняйся', 6),
  imperativeFormal: Word('вкореняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вкореняться.name.text, вкореняться);

export { вкореняться };