import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчиняться: PerfectVerb = {
  name: Word('подчиняться', 6),
  singular1stPerson: Word('подчиняюсь', 6),
  singular2ndPerson: Word('подчиняешься', 6),
  singular3rdPerson: Word('подчиняется', 6),
  plural1stPerson: Word('подчиняемся', 6),
  plural2ndPerson: Word('подчиняетесь', 6),
  plural3rdPerson: Word('подчиняются', 6),
  masculinePast: Word('подчинялся', 6),
  femininePast: Word('подчинялась', 6),
  neuterPast: Word('подчинялось', 6),
  pluralPast: Word('подчинялись', 6),
  imperativeInformal: Word('подчиняйся', 6),
  imperativeFormal: Word('подчиняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подчиняться.name.text, подчиняться);

export { подчиняться };