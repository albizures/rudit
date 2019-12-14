import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увольняться: PerfectVerb = {
  name: Word('увольняться', 6),
  singular1stPerson: Word('увольняюсь', 6),
  singular2ndPerson: Word('увольняешься', 6),
  singular3rdPerson: Word('увольняется', 6),
  plural1stPerson: Word('увольняемся', 6),
  plural2ndPerson: Word('увольняетесь', 6),
  plural3rdPerson: Word('увольняются', 6),
  masculinePast: Word('увольнялся', 6),
  femininePast: Word('увольнялась', 6),
  neuterPast: Word('увольнялось', 6),
  pluralPast: Word('увольнялись', 6),
  imperativeInformal: Word('увольняйся', 6),
  imperativeFormal: Word('увольняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(увольняться.name.text, увольняться);

export { увольняться };