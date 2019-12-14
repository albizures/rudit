import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашуметь: PerfectVerb = {
  name: Word('нашуметь', 5),
  singular1stPerson: Word('нашумлю', 6),
  singular2ndPerson: Word('нашумишь', 5),
  singular3rdPerson: Word('нашумит', 5),
  plural1stPerson: Word('нашумим', 5),
  plural2ndPerson: Word('нашумите', 5),
  plural3rdPerson: Word('нашумят', 5),
  masculinePast: Word('нашумел', 5),
  femininePast: Word('нашумела', 5),
  neuterPast: Word('нашумело', 5),
  pluralPast: Word('нашумели', 5),
  imperativeInformal: Word('нашуми', 5),
  imperativeFormal: Word('нашумите', 5),
  imperfect: [],
};

perfectVerbs.set(нашуметь.name.text, нашуметь);

export { нашуметь };