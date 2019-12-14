import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бегать: PerfectVerb = {
  name: Word('бегать', 1),
  singular1stPerson: Word('бегаю', 1),
  singular2ndPerson: Word('бегаешь', 1),
  singular3rdPerson: Word('бегает', 1),
  plural1stPerson: Word('бегаем', 1),
  plural2ndPerson: Word('бегаете', 1),
  plural3rdPerson: Word('бегают', 1),
  masculinePast: Word('бегал', 1),
  femininePast: Word('бегала', 1),
  neuterPast: Word('бегало', 1),
  pluralPast: Word('бегали', 1),
  imperativeInformal: Word('бегай', 1),
  imperativeFormal: Word('бегайте', 1),
  imperfect: ['побегать'],
};

perfectVerbs.set(бегать.name.text, бегать);

export { бегать };