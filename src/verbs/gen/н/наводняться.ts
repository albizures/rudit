import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наводняться: PerfectVerb = {
  name: Word('наводняться', 6),
  singular1stPerson: Word('наводняюсь', 6),
  singular2ndPerson: Word('наводняешься', 6),
  singular3rdPerson: Word('наводняется', 6),
  plural1stPerson: Word('наводняемся', 6),
  plural2ndPerson: Word('наводняетесь', 6),
  plural3rdPerson: Word('наводняются', 6),
  masculinePast: Word('наводнялся', 6),
  femininePast: Word('наводнялась', 6),
  neuterPast: Word('наводнялось', 6),
  pluralPast: Word('наводнялись', 6),
  imperativeInformal: Word('наводняйся', 6),
  imperativeFormal: Word('наводняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(наводняться.name.text, наводняться);

export { наводняться };