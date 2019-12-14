import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подновляться: PerfectVerb = {
  name: Word('подновляться', 7),
  singular1stPerson: Word('подновляюсь', 7),
  singular2ndPerson: Word('подновляешься', 7),
  singular3rdPerson: Word('подновляется', 7),
  plural1stPerson: Word('подновляемся', 7),
  plural2ndPerson: Word('подновляетесь', 7),
  plural3rdPerson: Word('подновляются', 7),
  masculinePast: Word('подновлялся', 7),
  femininePast: Word('подновлялась', 7),
  neuterPast: Word('подновлялось', 7),
  pluralPast: Word('подновлялись', 7),
  imperativeInformal: Word('подновляйся', 7),
  imperativeFormal: Word('подновляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(подновляться.name.text, подновляться);

export { подновляться };