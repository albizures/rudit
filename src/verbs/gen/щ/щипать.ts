import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щипать: PerfectVerb = {
  name: Word('щипать', 3),
  singular1stPerson: Word('щипаю', 3),
  singular2ndPerson: Word('щипаешь', 3),
  singular3rdPerson: Word('щипает', 3),
  plural1stPerson: Word('щипаем', 3),
  plural2ndPerson: Word('щипаете', 3),
  plural3rdPerson: Word('щипают', 3),
  masculinePast: Word('щипал', 3),
  femininePast: Word('щипала', 3),
  neuterPast: Word('щипало', 3),
  pluralPast: Word('щипали', 3),
  imperativeInformal: Word('щипай', 3),
  imperativeFormal: Word('щипайте', 3),
  imperfect: [],
};

perfectVerbs.set(щипать.name.text, щипать);

export { щипать };