import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встретить: PerfectVerb = {
  name: Word('встретить', 4),
  singular1stPerson: Word('встречу', 4),
  singular2ndPerson: Word('встретишь', 4),
  singular3rdPerson: Word('встретит', 4),
  plural1stPerson: Word('встретим', 4),
  plural2ndPerson: Word('встретите', 4),
  plural3rdPerson: Word('встретят', 4),
  masculinePast: Word('встретил', 4),
  femininePast: Word('встретила', 4),
  neuterPast: Word('встретило', 4),
  pluralPast: Word('встретили', 4),
  imperativeInformal: Word('встреть', 4),
  imperativeFormal: Word('встретьте', 4),
  imperfect: ['встречать'],
};

perfectVerbs.set(встретить.name.text, встретить);

export { встретить };