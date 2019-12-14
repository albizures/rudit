import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбелить: PerfectVerb = {
  name: Word('выбелить', 1),
  singular1stPerson: Word('выбелю', 1),
  singular2ndPerson: Word('выбелишь', 1),
  singular3rdPerson: Word('выбелит', 1),
  plural1stPerson: Word('выбелим', 1),
  plural2ndPerson: Word('выбелите', 1),
  plural3rdPerson: Word('выбелят', 1),
  masculinePast: Word('выбелил', 1),
  femininePast: Word('выбелила', 1),
  neuterPast: Word('выбелило', 1),
  pluralPast: Word('выбелили', 1),
  imperativeInformal: Word('выбели', 1),
  imperativeFormal: Word('выбелите', 1),
  imperfect: [],
};

perfectVerbs.set(выбелить.name.text, выбелить);

export { выбелить };