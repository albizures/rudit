import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постричь: PerfectVerb = {
  name: Word('постричь', 5),
  singular1stPerson: Word('постригу', 7),
  singular2ndPerson: Word('пострижёшь', 7),
  singular3rdPerson: Word('пострижёт', 7),
  plural1stPerson: Word('пострижём', 7),
  plural2ndPerson: Word('пострижёте', 7),
  plural3rdPerson: Word('постригут', 7),
  masculinePast: Word('постриг', 5),
  femininePast: Word('постригла', 5),
  neuterPast: Word('постригло', 5),
  pluralPast: Word('постригли', 5),
  imperativeInformal: Word('постриги', 7),
  imperativeFormal: Word('постригите', 7),
  imperfect: [],
};

perfectVerbs.set(постричь.name.text, постричь);

export { постричь };