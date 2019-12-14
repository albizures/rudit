import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встрять: PerfectVerb = {
  name: Word('встрять', 4),
  singular1stPerson: Word('встряну', 4),
  singular2ndPerson: Word('встрянешь', 4),
  singular3rdPerson: Word('встрянет', 4),
  plural1stPerson: Word('встрянем', 4),
  plural2ndPerson: Word('встрянете', 4),
  plural3rdPerson: Word('встрянут', 4),
  masculinePast: Word('встрял', 4),
  femininePast: Word('встряла', 4),
  neuterPast: Word('встряло', 4),
  pluralPast: Word('встряли', 4),
  imperativeInformal: Word('встрянь', 4),
  imperativeFormal: Word('встряньте', 4),
  imperfect: [],
};

perfectVerbs.set(встрять.name.text, встрять);

export { встрять };