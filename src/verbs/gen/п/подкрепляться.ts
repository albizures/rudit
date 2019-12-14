import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрепляться: PerfectVerb = {
  name: Word('подкрепляться', 8),
  singular1stPerson: Word('подкрепляюсь', 8),
  singular2ndPerson: Word('подкрепляешься', 8),
  singular3rdPerson: Word('подкрепляется', 8),
  plural1stPerson: Word('подкрепляемся', 8),
  plural2ndPerson: Word('подкрепляетесь', 8),
  plural3rdPerson: Word('подкрепляются', 8),
  masculinePast: Word('подкреплялся', 8),
  femininePast: Word('подкреплялась', 8),
  neuterPast: Word('подкреплялось', 8),
  pluralPast: Word('подкреплялись', 8),
  imperativeInformal: Word('подкрепляйся', 8),
  imperativeFormal: Word('подкрепляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(подкрепляться.name.text, подкрепляться);

export { подкрепляться };