import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внушать: PerfectVerb = {
  name: Word('внушать', 4),
  singular1stPerson: Word('внушаю', 4),
  singular2ndPerson: Word('внушаешь', 4),
  singular3rdPerson: Word('внушает', 4),
  plural1stPerson: Word('внушаем', 4),
  plural2ndPerson: Word('внушаете', 4),
  plural3rdPerson: Word('внушают', 4),
  masculinePast: Word('внушал', 4),
  femininePast: Word('внушала', 4),
  neuterPast: Word('внушало', 4),
  pluralPast: Word('внушали', 4),
  imperativeInformal: Word('внушай', 4),
  imperativeFormal: Word('внушайте', 4),
  imperfect: [],
};

perfectVerbs.set(внушать.name.text, внушать);

export { внушать };