import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предлагать: PerfectVerb = {
  name: Word('предлагать', 7),
  singular1stPerson: Word('предлагаю', 7),
  singular2ndPerson: Word('предлагаешь', 7),
  singular3rdPerson: Word('предлагает', 7),
  plural1stPerson: Word('предлагаем', 7),
  plural2ndPerson: Word('предлагаете', 7),
  plural3rdPerson: Word('предлагают', 7),
  masculinePast: Word('предлагал', 7),
  femininePast: Word('предлагала', 7),
  neuterPast: Word('предлагало', 7),
  pluralPast: Word('предлагали', 7),
  imperativeInformal: Word('предлагай', 7),
  imperativeFormal: Word('предлагайте', 7),
  imperfect: ['предложить'],
};

perfectVerbs.set(предлагать.name.text, предлагать);

export { предлагать };