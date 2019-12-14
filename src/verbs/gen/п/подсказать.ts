import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсказать: PerfectVerb = {
  name: Word('подсказать', 7),
  singular1stPerson: Word('подскажу', 7),
  singular2ndPerson: Word('подскажешь', 5),
  singular3rdPerson: Word('подскажет', 5),
  plural1stPerson: Word('подскажем', 5),
  plural2ndPerson: Word('подскажете', 5),
  plural3rdPerson: Word('подскажут', 5),
  masculinePast: Word('подсказал', 7),
  femininePast: Word('подсказала', 7),
  neuterPast: Word('подсказало', 7),
  pluralPast: Word('подсказали', 7),
  imperativeInformal: Word('подскажи', 7),
  imperativeFormal: Word('подскажите', 7),
  imperfect: ['подсказывать'],
};

perfectVerbs.set(подсказать.name.text, подсказать);

export { подсказать };