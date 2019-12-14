import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порассказать: PerfectVerb = {
  name: Word('порассказать', 9),
  singular1stPerson: Word('порасскажу', 9),
  singular2ndPerson: Word('порасскажешь', 7),
  singular3rdPerson: Word('порасскажет', 7),
  plural1stPerson: Word('порасскажем', 7),
  plural2ndPerson: Word('порасскажете', 7),
  plural3rdPerson: Word('порасскажут', 7),
  masculinePast: Word('порассказал', 9),
  femininePast: Word('порассказала', 9),
  neuterPast: Word('порассказало', 9),
  pluralPast: Word('порассказали', 9),
  imperativeInformal: Word('порасскажи', 9),
  imperativeFormal: Word('порасскажите', 9),
  imperfect: [],
};

perfectVerbs.set(порассказать.name.text, порассказать);

export { порассказать };