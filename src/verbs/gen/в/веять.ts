import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const веять: PerfectVerb = {
  name: Word('веять', 1),
  singular1stPerson: Word('вею', 1),
  singular2ndPerson: Word('веешь', 1),
  singular3rdPerson: Word('веет', 1),
  plural1stPerson: Word('веем', 1),
  plural2ndPerson: Word('веете', 1),
  plural3rdPerson: Word('веют', 1),
  masculinePast: Word('веял', 1),
  femininePast: Word('веяла', 1),
  neuterPast: Word('веяло', 1),
  pluralPast: Word('веяли', 1),
  imperativeInformal: Word('вей', 1),
  imperativeFormal: Word('вейте', 1),
  imperfect: [],
};

perfectVerbs.set(веять.name.text, веять);

export { веять };