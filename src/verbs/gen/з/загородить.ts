import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загородить: PerfectVerb = {
  name: Word('загородить', 7),
  singular1stPerson: Word('загорожу', 7),
  singular2ndPerson: Word('загородишь', 5),
  singular3rdPerson: Word('загородит', 5),
  plural1stPerson: Word('загородим', 5),
  plural2ndPerson: Word('загородите', 5),
  plural3rdPerson: Word('загородят', 5),
  masculinePast: Word('загородил', 7),
  femininePast: Word('загородила', 7),
  neuterPast: Word('загородило', 7),
  pluralPast: Word('загородили', 7),
  imperativeInformal: Word('загороди', 7),
  imperativeFormal: Word('загородите', 7),
  imperfect: [],
};

perfectVerbs.set(загородить.name.text, загородить);

export { загородить };