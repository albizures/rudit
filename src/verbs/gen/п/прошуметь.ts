import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошуметь: PerfectVerb = {
  name: Word('прошуметь', 6),
  singular1stPerson: Word('прошумлю', 7),
  singular2ndPerson: Word('прошумишь', 6),
  singular3rdPerson: Word('прошумит', 6),
  plural1stPerson: Word('прошумим', 6),
  plural2ndPerson: Word('прошумите', 6),
  plural3rdPerson: Word('прошумят', 6),
  masculinePast: Word('прошумел', 6),
  femininePast: Word('прошумела', 6),
  neuterPast: Word('прошумело', 6),
  pluralPast: Word('прошумели', 6),
  imperativeInformal: Word('прошуми', 6),
  imperativeFormal: Word('прошумите', 6),
  imperfect: [],
};

perfectVerbs.set(прошуметь.name.text, прошуметь);

export { прошуметь };