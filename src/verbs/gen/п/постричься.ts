import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постричься: PerfectVerb = {
  name: Word('постричься', 5),
  singular1stPerson: Word('постригусь', 7),
  singular2ndPerson: Word('пострижёшься', 5),
  singular3rdPerson: Word('пострижётся', 5),
  plural1stPerson: Word('пострижёмся', 5),
  plural2ndPerson: Word('пострижётесь', 9),
  plural3rdPerson: Word('постригутся', 7),
  masculinePast: Word('постригся', 5),
  femininePast: Word('постриглась', 5),
  neuterPast: Word('постриглось', 5),
  pluralPast: Word('постриглись', 5),
  imperativeInformal: Word('постригись', 7),
  imperativeFormal: Word('постригитесь', 7),
  imperfect: [],
};

perfectVerbs.set(постричься.name.text, постричься);

export { постричься };