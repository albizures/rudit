import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придумывать: PerfectVerb = {
  name: Word('придумывать', 4),
  singular1stPerson: Word('придумываю', 4),
  singular2ndPerson: Word('придумываешь', 4),
  singular3rdPerson: Word('придумывает', 4),
  plural1stPerson: Word('придумываем', 4),
  plural2ndPerson: Word('придумываете', 4),
  plural3rdPerson: Word('придумывают', 4),
  masculinePast: Word('придумывал', 4),
  femininePast: Word('придумывала', 4),
  neuterPast: Word('придумывало', 4),
  pluralPast: Word('придумывали', 4),
  imperativeInformal: Word('придумывай', 4),
  imperativeFormal: Word('придумывайте', 4),
  imperfect: ['придумать'],
};

perfectVerbs.set(придумывать.name.text, придумывать);

export { придумывать };