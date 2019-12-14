import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щупать: PerfectVerb = {
  name: Word('щупать', 1),
  singular1stPerson: Word('щупаю', 1),
  singular2ndPerson: Word('щупаешь', 1),
  singular3rdPerson: Word('щупает', 1),
  plural1stPerson: Word('щупаем', 1),
  plural2ndPerson: Word('щупаете', 1),
  plural3rdPerson: Word('щупают', 1),
  masculinePast: Word('щупал', 1),
  femininePast: Word('щупала', 1),
  neuterPast: Word('щупало', 1),
  pluralPast: Word('щупали', 1),
  imperativeInformal: Word('щупай', 1),
  imperativeFormal: Word('щупайте', 1),
  imperfect: [],
};

perfectVerbs.set(щупать.name.text, щупать);

export { щупать };