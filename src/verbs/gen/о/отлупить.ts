import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлупить: PerfectVerb = {
  name: Word('отлупить', 5),
  singular1stPerson: Word('отлуплю', 6),
  singular2ndPerson: Word('отлупишь', 3),
  singular3rdPerson: Word('отлупит', 3),
  plural1stPerson: Word('отлупим', 3),
  plural2ndPerson: Word('отлупите', 3),
  plural3rdPerson: Word('отлупят', 3),
  masculinePast: Word('отлупил', 5),
  femininePast: Word('отлупила', 5),
  neuterPast: Word('отлупило', 5),
  pluralPast: Word('отлупили', 5),
  imperativeInformal: Word('отлупи', 5),
  imperativeFormal: Word('отлупите', 5),
  imperfect: [],
};

perfectVerbs.set(отлупить.name.text, отлупить);

export { отлупить };