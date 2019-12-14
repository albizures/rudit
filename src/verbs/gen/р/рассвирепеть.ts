import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассвирепеть: PerfectVerb = {
  name: Word('рассвирепеть', 9),
  singular1stPerson: Word('рассвирепею', 9),
  singular2ndPerson: Word('рассвирепеешь', 9),
  singular3rdPerson: Word('рассвирепеет', 9),
  plural1stPerson: Word('рассвирепеем', 9),
  plural2ndPerson: Word('рассвирепеете', 9),
  plural3rdPerson: Word('рассвирепеют', 9),
  masculinePast: Word('рассвирепел', 9),
  femininePast: Word('рассвирепела', 9),
  neuterPast: Word('рассвирепело', 9),
  pluralPast: Word('рассвирепели', 9),
  imperativeInformal: Word('рассвирепей', 9),
  imperativeFormal: Word('рассвирепейте', 9),
  imperfect: [],
};

perfectVerbs.set(рассвирепеть.name.text, рассвирепеть);

export { рассвирепеть };