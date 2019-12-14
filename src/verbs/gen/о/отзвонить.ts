import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отзвонить: PerfectVerb = {
  name: Word('отзвонить', 6),
  singular1stPerson: Word('отзвоню', 6),
  singular2ndPerson: Word('отзвонишь', 6),
  singular3rdPerson: Word('отзвонит', 6),
  plural1stPerson: Word('отзвоним', 6),
  plural2ndPerson: Word('отзвоните', 6),
  plural3rdPerson: Word('отзвонят', 6),
  masculinePast: Word('отзвонил', 6),
  femininePast: Word('отзвонила', 6),
  neuterPast: Word('отзвонило', 6),
  pluralPast: Word('отзвонили', 6),
  imperativeInformal: Word('отзвони', 6),
  imperativeFormal: Word('отзвоните', 6),
  imperfect: [],
};

perfectVerbs.set(отзвонить.name.text, отзвонить);

export { отзвонить };