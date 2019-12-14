import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налечь: PerfectVerb = {
  name: Word('налечь', 3),
  singular1stPerson: Word('налягу', 3),
  singular2ndPerson: Word('наляжешь', 3),
  singular3rdPerson: Word('наляжет', 3),
  plural1stPerson: Word('наляжем', 3),
  plural2ndPerson: Word('наляжете', 3),
  plural3rdPerson: Word('налягут', 3),
  masculinePast: Word('налёг', 3),
  femininePast: Word('налегла', 6),
  neuterPast: Word('налегло', 6),
  pluralPast: Word('налегли', 6),
  imperativeInformal: Word('наляг', 3),
  imperativeFormal: Word('налягте', 3),
  imperfect: [],
};

perfectVerbs.set(налечь.name.text, налечь);

export { налечь };