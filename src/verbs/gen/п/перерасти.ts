import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерасти: PerfectVerb = {
  name: Word('перерасти', 8),
  singular1stPerson: Word('перерау', 6),
  singular2ndPerson: Word('перераёшь', 6),
  singular3rdPerson: Word('перераёт', 6),
  plural1stPerson: Word('перераём', 6),
  plural2ndPerson: Word('перераёте', 6),
  plural3rdPerson: Word('перерают', 6),
  masculinePast: Word('перерос', 5),
  femininePast: Word('переросла', 8),
  neuterPast: Word('переросло', 8),
  pluralPast: Word('переросли', 8),
  imperativeInformal: Word('перерай', 5),
  imperativeFormal: Word('перерайте', 5),
  imperfect: [],
};

perfectVerbs.set(перерасти.name.text, перерасти);

export { перерасти };