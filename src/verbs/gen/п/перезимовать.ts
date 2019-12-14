import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезимовать: PerfectVerb = {
  name: Word('перезимовать', 9),
  singular1stPerson: Word('перезимую', 7),
  singular2ndPerson: Word('перезимуешь', 7),
  singular3rdPerson: Word('перезимует', 7),
  plural1stPerson: Word('перезимуем', 7),
  plural2ndPerson: Word('перезимуете', 7),
  plural3rdPerson: Word('перезимуют', 7),
  masculinePast: Word('перезимовал', 9),
  femininePast: Word('перезимовала', 9),
  neuterPast: Word('перезимовало', 9),
  pluralPast: Word('перезимовали', 9),
  imperativeInformal: Word('перезимуй', 7),
  imperativeFormal: Word('перезимуйте', 7),
  imperfect: [],
};

perfectVerbs.set(перезимовать.name.text, перезимовать);

export { перезимовать };