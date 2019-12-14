import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вихляться: PerfectVerb = {
  name: Word('вихляться', 4),
  singular1stPerson: Word('вихляюсь', 4),
  singular2ndPerson: Word('вихляешься', 4),
  singular3rdPerson: Word('вихляется', 4),
  plural1stPerson: Word('вихляемся', 4),
  plural2ndPerson: Word('вихляетесь', 4),
  plural3rdPerson: Word('вихляются', 4),
  masculinePast: Word('вихлялся', 4),
  femininePast: Word('вихлялась', 4),
  neuterPast: Word('вихлялось', 4),
  pluralPast: Word('вихлялись', 4),
  imperativeInformal: Word('вихляйся', 4),
  imperativeFormal: Word('вихляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вихляться.name.text, вихляться);

export { вихляться };