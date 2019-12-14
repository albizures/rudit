import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расправляться: PerfectVerb = {
  name: Word('расправляться', 8),
  singular1stPerson: Word('расправляюсь', 8),
  singular2ndPerson: Word('расправляешься', 8),
  singular3rdPerson: Word('расправляется', 8),
  plural1stPerson: Word('расправляемся', 8),
  plural2ndPerson: Word('расправляетесь', 8),
  plural3rdPerson: Word('расправляются', 8),
  masculinePast: Word('расправлялся', 8),
  femininePast: Word('расправлялась', 8),
  neuterPast: Word('расправлялось', 8),
  pluralPast: Word('расправлялись', 8),
  imperativeInformal: Word('расправляйся', 8),
  imperativeFormal: Word('расправляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(расправляться.name.text, расправляться);

export { расправляться };