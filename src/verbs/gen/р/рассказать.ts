import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассказать: PerfectVerb = {
  name: Word('рассказать', 7),
  singular1stPerson: Word('расскажу', 7),
  singular2ndPerson: Word('расскажешь', 5),
  singular3rdPerson: Word('расскажет', 5),
  plural1stPerson: Word('расскажем', 5),
  plural2ndPerson: Word('расскажете', 5),
  plural3rdPerson: Word('расскажут', 5),
  masculinePast: Word('рассказал', 7),
  femininePast: Word('рассказала', 7),
  neuterPast: Word('рассказало', 7),
  pluralPast: Word('рассказали', 7),
  imperativeInformal: Word('расскажи', 7),
  imperativeFormal: Word('расскажите', 7),
  imperfect: ['рассказывать'],
};

perfectVerbs.set(рассказать.name.text, рассказать);

export { рассказать };