import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проискать: PerfectVerb = {
  name: Word('проискать', 6),
  singular1stPerson: Word('проищу', 5),
  singular2ndPerson: Word('проищешь', 3),
  singular3rdPerson: Word('проищет', 3),
  plural1stPerson: Word('проищем', 3),
  plural2ndPerson: Word('проищете', 3),
  plural3rdPerson: Word('проищут', 3),
  masculinePast: Word('проискал', 6),
  femininePast: Word('проискала', 6),
  neuterPast: Word('проискало', 6),
  pluralPast: Word('проискали', 6),
  imperativeInformal: Word('проищи', 5),
  imperativeFormal: Word('проищите', 5),
  imperfect: [],
};

perfectVerbs.set(проискать.name.text, проискать);

export { проискать };