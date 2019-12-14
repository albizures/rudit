import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набегать: PerfectVerb = {
  name: Word('набегать', 3),
  singular1stPerson: Word('набегаю', 3),
  singular2ndPerson: Word('набегаешь', 3),
  singular3rdPerson: Word('набегает', 3),
  plural1stPerson: Word('набегаем', 3),
  plural2ndPerson: Word('набегаете', 3),
  plural3rdPerson: Word('набегают', 3),
  masculinePast: Word('набегал', 3),
  femininePast: Word('набегала', 3),
  neuterPast: Word('набегало', 3),
  pluralPast: Word('набегали', 3),
  imperativeInformal: Word('набегай', 3),
  imperativeFormal: Word('набегайте', 3),
  imperfect: [],
};

perfectVerbs.set(набегать.name.text, набегать);

export { набегать };