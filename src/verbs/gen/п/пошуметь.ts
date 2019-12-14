import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошуметь: PerfectVerb = {
  name: Word('пошуметь', 5),
  singular1stPerson: Word('пошумлю', 6),
  singular2ndPerson: Word('пошумишь', 5),
  singular3rdPerson: Word('пошумит', 5),
  plural1stPerson: Word('пошумим', 5),
  plural2ndPerson: Word('пошумите', 5),
  plural3rdPerson: Word('пошумят', 5),
  masculinePast: Word('пошумел', 5),
  femininePast: Word('пошумела', 5),
  neuterPast: Word('пошумело', 5),
  pluralPast: Word('пошумели', 5),
  imperativeInformal: Word('пошуми', 5),
  imperativeFormal: Word('пошумите', 5),
  imperfect: [],
};

perfectVerbs.set(пошуметь.name.text, пошуметь);

export { пошуметь };