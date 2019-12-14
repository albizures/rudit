import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побегать: PerfectVerb = {
  name: Word('побегать', 3),
  singular1stPerson: Word('побегаю', 3),
  singular2ndPerson: Word('побегаешь', 3),
  singular3rdPerson: Word('побегает', 3),
  plural1stPerson: Word('побегаем', 3),
  plural2ndPerson: Word('побегаете', 3),
  plural3rdPerson: Word('побегают', 3),
  masculinePast: Word('побегал', 3),
  femininePast: Word('побегала', 3),
  neuterPast: Word('побегало', 3),
  pluralPast: Word('побегали', 3),
  imperativeInformal: Word('побегай', 3),
  imperativeFormal: Word('побегайте', 3),
  imperfect: ['бегать'],
};

perfectVerbs.set(побегать.name.text, побегать);

export { побегать };