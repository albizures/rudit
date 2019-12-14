import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расселяться: PerfectVerb = {
  name: Word('расселяться', 6),
  singular1stPerson: Word('расселяюсь', 6),
  singular2ndPerson: Word('расселяешься', 6),
  singular3rdPerson: Word('расселяется', 6),
  plural1stPerson: Word('расселяемся', 6),
  plural2ndPerson: Word('расселяетесь', 6),
  plural3rdPerson: Word('расселяются', 6),
  masculinePast: Word('расселялся', 6),
  femininePast: Word('расселялась', 6),
  neuterPast: Word('расселялось', 6),
  pluralPast: Word('расселялись', 6),
  imperativeInformal: Word('расселяйся', 6),
  imperativeFormal: Word('расселяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расселяться.name.text, расселяться);

export { расселяться };