import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепачкать: PerfectVerb = {
  name: Word('перепачкать', 5),
  singular1stPerson: Word('перепачкаю', 5),
  singular2ndPerson: Word('перепачкаешь', 5),
  singular3rdPerson: Word('перепачкает', 5),
  plural1stPerson: Word('перепачкаем', 5),
  plural2ndPerson: Word('перепачкаете', 5),
  plural3rdPerson: Word('перепачкают', 5),
  masculinePast: Word('перепачкал', 5),
  femininePast: Word('перепачкала', 5),
  neuterPast: Word('перепачкало', 5),
  pluralPast: Word('перепачкали', 5),
  imperativeInformal: Word('перепачкай', 5),
  imperativeFormal: Word('перепачкайте', 5),
  imperfect: [],
};

perfectVerbs.set(перепачкать.name.text, перепачкать);

export { перепачкать };