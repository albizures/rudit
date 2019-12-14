import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припустить: PerfectVerb = {
  name: Word('припустить', 7),
  singular1stPerson: Word('припущу', 6),
  singular2ndPerson: Word('припустишь', 4),
  singular3rdPerson: Word('припустит', 4),
  plural1stPerson: Word('припустим', 4),
  plural2ndPerson: Word('припустите', 4),
  plural3rdPerson: Word('припустят', 4),
  masculinePast: Word('припустил', 7),
  femininePast: Word('припустила', 7),
  neuterPast: Word('припустило', 7),
  pluralPast: Word('припустили', 7),
  imperativeInformal: Word('припусти', 7),
  imperativeFormal: Word('припустите', 7),
  imperfect: [],
};

perfectVerbs.set(припустить.name.text, припустить);

export { припустить };