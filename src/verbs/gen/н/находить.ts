import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const находить: PerfectVerb = {
  name: Word('находить', 5),
  singular1stPerson: Word('нахожу', 5),
  singular2ndPerson: Word('находишь', 3),
  singular3rdPerson: Word('находит', 3),
  plural1stPerson: Word('находим', 3),
  plural2ndPerson: Word('находите', 3),
  plural3rdPerson: Word('находят', 3),
  masculinePast: Word('находил', 5),
  femininePast: Word('находила', 5),
  neuterPast: Word('находило', 5),
  pluralPast: Word('находили', 5),
  imperativeInformal: Word('находи', 5),
  imperativeFormal: Word('находите', 5),
  imperfect: ['найти'],
};

perfectVerbs.set(находить.name.text, находить);

export { находить };