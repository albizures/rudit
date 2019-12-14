import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предсказать: PerfectVerb = {
  name: Word('предсказать', 8),
  singular1stPerson: Word('предскажу', 8),
  singular2ndPerson: Word('предскажешь', 6),
  singular3rdPerson: Word('предскажет', 6),
  plural1stPerson: Word('предскажем', 6),
  plural2ndPerson: Word('предскажете', 6),
  plural3rdPerson: Word('предскажут', 6),
  masculinePast: Word('предсказал', 8),
  femininePast: Word('предсказала', 8),
  neuterPast: Word('предсказало', 8),
  pluralPast: Word('предсказали', 8),
  imperativeInformal: Word('предскажи', 8),
  imperativeFormal: Word('предскажите', 8),
  imperfect: ['предсказывать'],
};

perfectVerbs.set(предсказать.name.text, предсказать);

export { предсказать };