import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вставляться: PerfectVerb = {
  name: Word('вставляться', 6),
  singular1stPerson: Word('вставляюсь', 6),
  singular2ndPerson: Word('вставляешься', 6),
  singular3rdPerson: Word('вставляется', 6),
  plural1stPerson: Word('вставляемся', 6),
  plural2ndPerson: Word('вставляетесь', 6),
  plural3rdPerson: Word('вставляются', 6),
  masculinePast: Word('вставлялся', 6),
  femininePast: Word('вставлялась', 6),
  neuterPast: Word('вставлялось', 6),
  pluralPast: Word('вставлялись', 6),
  imperativeInformal: Word('вставляйся', 6),
  imperativeFormal: Word('вставляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вставляться.name.text, вставляться);

export { вставляться };