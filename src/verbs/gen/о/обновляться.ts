import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обновляться: PerfectVerb = {
  name: Word('обновляться', 6),
  singular1stPerson: Word('обновляюсь', 6),
  singular2ndPerson: Word('обновляешься', 6),
  singular3rdPerson: Word('обновляется', 6),
  plural1stPerson: Word('обновляемся', 6),
  plural2ndPerson: Word('обновляетесь', 6),
  plural3rdPerson: Word('обновляются', 6),
  masculinePast: Word('обновлялся', 6),
  femininePast: Word('обновлялась', 6),
  neuterPast: Word('обновлялось', 6),
  pluralPast: Word('обновлялись', 6),
  imperativeInformal: Word('обновляйся', 6),
  imperativeFormal: Word('обновляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обновляться.name.text, обновляться);

export { обновляться };