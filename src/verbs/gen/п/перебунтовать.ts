import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебунтовать: PerfectVerb = {
  name: Word('перебунтовать', 10),
  singular1stPerson: Word('перебунтую', 8),
  singular2ndPerson: Word('перебунтуешь', 8),
  singular3rdPerson: Word('перебунтует', 8),
  plural1stPerson: Word('перебунтуем', 8),
  plural2ndPerson: Word('перебунтуете', 8),
  plural3rdPerson: Word('перебунтуют', 8),
  masculinePast: Word('перебунтовал', 10),
  femininePast: Word('перебунтовала', 10),
  neuterPast: Word('перебунтовало', 10),
  pluralPast: Word('перебунтовали', 10),
  imperativeInformal: Word('перебунтуй', 8),
  imperativeFormal: Word('перебунтуйте', 8),
  imperfect: [],
};

perfectVerbs.set(перебунтовать.name.text, перебунтовать);

export { перебунтовать };