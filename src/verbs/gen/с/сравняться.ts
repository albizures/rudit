import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сравняться: PerfectVerb = {
  name: Word('сравняться', 5),
  singular1stPerson: Word('сравняюсь', 5),
  singular2ndPerson: Word('сравняешься', 5),
  singular3rdPerson: Word('сравняется', 5),
  plural1stPerson: Word('сравняемся', 5),
  plural2ndPerson: Word('сравняетесь', 5),
  plural3rdPerson: Word('сравняются', 5),
  masculinePast: Word('сравнялся', 5),
  femininePast: Word('сравнялась', 5),
  neuterPast: Word('сравнялось', 5),
  pluralPast: Word('сравнялись', 5),
  imperativeInformal: Word('сравняйся', 5),
  imperativeFormal: Word('сравняйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сравняться.name.text, сравняться);

export { сравняться };