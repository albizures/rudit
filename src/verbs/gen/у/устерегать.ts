import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устерегать: PerfectVerb = {
  name: Word('устерегать', 7),
  singular1stPerson: Word('устерегаю', 7),
  singular2ndPerson: Word('устерегаешь', 7),
  singular3rdPerson: Word('устерегает', 7),
  plural1stPerson: Word('устерегаем', 7),
  plural2ndPerson: Word('устерегаете', 7),
  plural3rdPerson: Word('устерегают', 7),
  masculinePast: Word('устерегал', 7),
  femininePast: Word('устерегала', 7),
  neuterPast: Word('устерегало', 7),
  pluralPast: Word('устерегали', 7),
  imperativeInformal: Word('устерегай', 7),
  imperativeFormal: Word('устерегайте', 7),
  imperfect: [],
};

perfectVerbs.set(устерегать.name.text, устерегать);

export { устерегать };