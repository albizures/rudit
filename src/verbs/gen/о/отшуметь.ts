import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшуметь: PerfectVerb = {
  name: Word('отшуметь', 5),
  singular1stPerson: Word('отшумлю', 6),
  singular2ndPerson: Word('отшумишь', 5),
  singular3rdPerson: Word('отшумит', 5),
  plural1stPerson: Word('отшумим', 5),
  plural2ndPerson: Word('отшумите', 5),
  plural3rdPerson: Word('отшумят', 5),
  masculinePast: Word('отшумел', 5),
  femininePast: Word('отшумела', 5),
  neuterPast: Word('отшумело', 5),
  pluralPast: Word('отшумели', 5),
  imperativeInformal: Word('отшуми', 5),
  imperativeFormal: Word('отшумите', 5),
  imperfect: [],
};

perfectVerbs.set(отшуметь.name.text, отшуметь);

export { отшуметь };