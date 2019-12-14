import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслабляться: PerfectVerb = {
  name: Word('расслабляться', 8),
  singular1stPerson: Word('расслабляюсь', 8),
  singular2ndPerson: Word('расслабляешься', 8),
  singular3rdPerson: Word('расслабляется', 8),
  plural1stPerson: Word('расслабляемся', 8),
  plural2ndPerson: Word('расслабляетесь', 8),
  plural3rdPerson: Word('расслабляются', 8),
  masculinePast: Word('расслаблялся', 8),
  femininePast: Word('расслаблялась', 8),
  neuterPast: Word('расслаблялось', 8),
  pluralPast: Word('расслаблялись', 8),
  imperativeInformal: Word('расслабляйся', 8),
  imperativeFormal: Word('расслабляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(расслабляться.name.text, расслабляться);

export { расслабляться };