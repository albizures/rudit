import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъявить: PerfectVerb = {
  name: Word('изъявить', 5),
  singular1stPerson: Word('изъявлю', 6),
  singular2ndPerson: Word('изъявишь', 3),
  singular3rdPerson: Word('изъявит', 3),
  plural1stPerson: Word('изъявим', 3),
  plural2ndPerson: Word('изъявите', 3),
  plural3rdPerson: Word('изъявят', 3),
  masculinePast: Word('изъявил', 5),
  femininePast: Word('изъявила', 5),
  neuterPast: Word('изъявило', 5),
  pluralPast: Word('изъявили', 5),
  imperativeInformal: Word('изъяви', 5),
  imperativeFormal: Word('изъявите', 5),
  imperfect: [],
};

perfectVerbs.set(изъявить.name.text, изъявить);

export { изъявить };