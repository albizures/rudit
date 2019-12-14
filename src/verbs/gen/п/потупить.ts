import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потупить: PerfectVerb = {
  name: Word('потупить', 3),
  singular1stPerson: Word('потуплю', 3),
  singular2ndPerson: Word('потупишь', 3),
  singular3rdPerson: Word('потупит', 3),
  plural1stPerson: Word('потупим', 3),
  plural2ndPerson: Word('потупите', 3),
  plural3rdPerson: Word('потупят', 3),
  masculinePast: Word('потупил', 3),
  femininePast: Word('потупила', 3),
  neuterPast: Word('потупило', 3),
  pluralPast: Word('потупили', 3),
  imperativeInformal: Word('потупь', 3),
  imperativeFormal: Word('потупьте', 3),
  imperfect: [],
};

perfectVerbs.set(потупить.name.text, потупить);

export { потупить };