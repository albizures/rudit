import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемножать: PerfectVerb = {
  name: Word('перемножать', 8),
  singular1stPerson: Word('перемножаю', 8),
  singular2ndPerson: Word('перемножаешь', 8),
  singular3rdPerson: Word('перемножает', 8),
  plural1stPerson: Word('перемножаем', 8),
  plural2ndPerson: Word('перемножаете', 8),
  plural3rdPerson: Word('перемножают', 8),
  masculinePast: Word('перемножал', 8),
  femininePast: Word('перемножала', 8),
  neuterPast: Word('перемножало', 8),
  pluralPast: Word('перемножали', 8),
  imperativeInformal: Word('перемножай', 8),
  imperativeFormal: Word('перемножайте', 8),
  imperfect: [],
};

perfectVerbs.set(перемножать.name.text, перемножать);

export { перемножать };