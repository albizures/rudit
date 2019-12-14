import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добавляться: PerfectVerb = {
  name: Word('добавляться', 6),
  singular1stPerson: Word('добавляюсь', 6),
  singular2ndPerson: Word('добавляешься', 6),
  singular3rdPerson: Word('добавляется', 6),
  plural1stPerson: Word('добавляемся', 6),
  plural2ndPerson: Word('добавляетесь', 6),
  plural3rdPerson: Word('добавляются', 6),
  masculinePast: Word('добавлялся', 6),
  femininePast: Word('добавлялась', 6),
  neuterPast: Word('добавлялось', 6),
  pluralPast: Word('добавлялись', 6),
  imperativeInformal: Word('добавляйся', 6),
  imperativeFormal: Word('добавляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(добавляться.name.text, добавляться);

export { добавляться };