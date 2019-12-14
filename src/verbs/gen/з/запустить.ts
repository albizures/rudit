import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запустить: PerfectVerb = {
  name: Word('запустить', 6),
  singular1stPerson: Word('запущу', 5),
  singular2ndPerson: Word('запустишь', 3),
  singular3rdPerson: Word('запустит', 3),
  plural1stPerson: Word('запустим', 3),
  plural2ndPerson: Word('запустите', 3),
  plural3rdPerson: Word('запустят', 3),
  masculinePast: Word('запустил', 6),
  femininePast: Word('запустила', 6),
  neuterPast: Word('запустило', 6),
  pluralPast: Word('запустили', 6),
  imperativeInformal: Word('запусти', 6),
  imperativeFormal: Word('запустите', 6),
  imperfect: [],
};

perfectVerbs.set(запустить.name.text, запустить);

export { запустить };