import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебинтовать: PerfectVerb = {
  name: Word('перебинтовать', 10),
  singular1stPerson: Word('перебинтую', 8),
  singular2ndPerson: Word('перебинтуешь', 8),
  singular3rdPerson: Word('перебинтует', 8),
  plural1stPerson: Word('перебинтуем', 8),
  plural2ndPerson: Word('перебинтуете', 8),
  plural3rdPerson: Word('перебинтуют', 8),
  masculinePast: Word('перебинтовал', 10),
  femininePast: Word('перебинтовала', 10),
  neuterPast: Word('перебинтовало', 10),
  pluralPast: Word('перебинтовали', 10),
  imperativeInformal: Word('перебинтуй', 8),
  imperativeFormal: Word('перебинтуйте', 8),
  imperfect: [],
};

perfectVerbs.set(перебинтовать.name.text, перебинтовать);

export { перебинтовать };