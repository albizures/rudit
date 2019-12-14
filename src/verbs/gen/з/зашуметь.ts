import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашуметь: PerfectVerb = {
  name: Word('зашуметь', 5),
  singular1stPerson: Word('зашумлю', 6),
  singular2ndPerson: Word('зашумишь', 5),
  singular3rdPerson: Word('зашумит', 5),
  plural1stPerson: Word('зашумим', 5),
  plural2ndPerson: Word('зашумите', 5),
  plural3rdPerson: Word('зашумят', 5),
  masculinePast: Word('зашумел', 5),
  femininePast: Word('зашумела', 5),
  neuterPast: Word('зашумело', 5),
  pluralPast: Word('зашумели', 5),
  imperativeInformal: Word('зашуми', 5),
  imperativeFormal: Word('зашумите', 5),
  imperfect: [],
};

perfectVerbs.set(зашуметь.name.text, зашуметь);

export { зашуметь };