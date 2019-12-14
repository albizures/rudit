import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шуметь: PerfectVerb = {
  name: Word('шуметь', 3),
  singular1stPerson: Word('шумлю', 4),
  singular2ndPerson: Word('шумишь', 3),
  singular3rdPerson: Word('шумит', 3),
  plural1stPerson: Word('шумим', 3),
  plural2ndPerson: Word('шумите', 3),
  plural3rdPerson: Word('шумят', 3),
  masculinePast: Word('шумел', 3),
  femininePast: Word('шумела', 3),
  neuterPast: Word('шумело', 3),
  pluralPast: Word('шумели', 3),
  imperativeInformal: Word('шуми', 3),
  imperativeFormal: Word('шумите', 3),
  imperfect: [],
};

perfectVerbs.set(шуметь.name.text, шуметь);

export { шуметь };