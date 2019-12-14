import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объявить: PerfectVerb = {
  name: Word('объявить', 5),
  singular1stPerson: Word('объявлю', 6),
  singular2ndPerson: Word('объявишь', 3),
  singular3rdPerson: Word('объявит', 3),
  plural1stPerson: Word('объявим', 3),
  plural2ndPerson: Word('объявите', 3),
  plural3rdPerson: Word('объявят', 3),
  masculinePast: Word('объявил', 5),
  femininePast: Word('объявила', 5),
  neuterPast: Word('объявило', 5),
  pluralPast: Word('объявили', 5),
  imperativeInformal: Word('объяви', 5),
  imperativeFormal: Word('объявите', 5),
  imperfect: ['объявлять'],
};

perfectVerbs.set(объявить.name.text, объявить);

export { объявить };