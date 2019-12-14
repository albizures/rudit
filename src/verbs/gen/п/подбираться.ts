import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбираться: PerfectVerb = {
  name: Word('подбираться', 6),
  singular1stPerson: Word('подбираюсь', 6),
  singular2ndPerson: Word('подбираешься', 6),
  singular3rdPerson: Word('подбирается', 6),
  plural1stPerson: Word('подбираемся', 6),
  plural2ndPerson: Word('подбираетесь', 6),
  plural3rdPerson: Word('подбираются', 6),
  masculinePast: Word('подбирался', 6),
  femininePast: Word('подбиралась', 6),
  neuterPast: Word('подбиралось', 6),
  pluralPast: Word('подбирались', 6),
  imperativeInformal: Word('подбирайся', 6),
  imperativeFormal: Word('подбирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подбираться.name.text, подбираться);

export { подбираться };