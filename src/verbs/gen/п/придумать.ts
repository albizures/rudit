import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придумать: PerfectVerb = {
  name: Word('придумать', 4),
  singular1stPerson: Word('придумаю', 4),
  singular2ndPerson: Word('придумаешь', 4),
  singular3rdPerson: Word('придумает', 4),
  plural1stPerson: Word('придумаем', 4),
  plural2ndPerson: Word('придумаете', 4),
  plural3rdPerson: Word('придумают', 4),
  masculinePast: Word('придумал', 4),
  femininePast: Word('придумала', 4),
  neuterPast: Word('придумало', 4),
  pluralPast: Word('придумали', 4),
  imperativeInformal: Word('придумай', 4),
  imperativeFormal: Word('придумайте', 4),
  imperfect: ['придумывать'],
};

perfectVerbs.set(придумать.name.text, придумать);

export { придумать };