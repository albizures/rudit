import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предсказывать: PerfectVerb = {
  name: Word('предсказывать', 6),
  singular1stPerson: Word('предсказываю', 6),
  singular2ndPerson: Word('предсказываешь', 6),
  singular3rdPerson: Word('предсказывает', 6),
  plural1stPerson: Word('предсказываем', 6),
  plural2ndPerson: Word('предсказываете', 6),
  plural3rdPerson: Word('предсказывают', 6),
  masculinePast: Word('предсказывал', 6),
  femininePast: Word('предсказывала', 6),
  neuterPast: Word('предсказывало', 6),
  pluralPast: Word('предсказывали', 6),
  imperativeInformal: Word('предсказывай', 6),
  imperativeFormal: Word('предсказывайте', 6),
  imperfect: ['предсказать'],
};

perfectVerbs.set(предсказывать.name.text, предсказывать);

export { предсказывать };