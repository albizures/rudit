import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплавляться: PerfectVerb = {
  name: Word('расплавляться', 8),
  singular1stPerson: Word('расплавляюсь', 8),
  singular2ndPerson: Word('расплавляешься', 8),
  singular3rdPerson: Word('расплавляется', 8),
  plural1stPerson: Word('расплавляемся', 8),
  plural2ndPerson: Word('расплавляетесь', 8),
  plural3rdPerson: Word('расплавляются', 8),
  masculinePast: Word('расплавлялся', 8),
  femininePast: Word('расплавлялась', 8),
  neuterPast: Word('расплавлялось', 8),
  pluralPast: Word('расплавлялись', 8),
  imperativeInformal: Word('расплавляйся', 8),
  imperativeFormal: Word('расплавляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(расплавляться.name.text, расплавляться);

export { расплавляться };