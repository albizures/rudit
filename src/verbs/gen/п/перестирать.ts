import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестирать: PerfectVerb = {
  name: Word('перестирать', 8),
  singular1stPerson: Word('перестираю', 8),
  singular2ndPerson: Word('перестираешь', 8),
  singular3rdPerson: Word('перестирает', 8),
  plural1stPerson: Word('перестираем', 8),
  plural2ndPerson: Word('перестираете', 8),
  plural3rdPerson: Word('перестирают', 8),
  masculinePast: Word('перестирал', 8),
  femininePast: Word('перестирала', 8),
  neuterPast: Word('перестирало', 8),
  pluralPast: Word('перестирали', 8),
  imperativeInformal: Word('перестирай', 8),
  imperativeFormal: Word('перестирайте', 8),
  imperfect: [],
};

perfectVerbs.set(перестирать.name.text, перестирать);

export { перестирать };