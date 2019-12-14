import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предпочитать: PerfectVerb = {
  name: Word('предпочитать', 9),
  singular1stPerson: Word('предпочитаю', 9),
  singular2ndPerson: Word('предпочитаешь', 9),
  singular3rdPerson: Word('предпочитает', 9),
  plural1stPerson: Word('предпочитаем', 9),
  plural2ndPerson: Word('предпочитаете', 9),
  plural3rdPerson: Word('предпочитают', 9),
  masculinePast: Word('предпочитал', 9),
  femininePast: Word('предпочитала', 9),
  neuterPast: Word('предпочитало', 9),
  pluralPast: Word('предпочитали', 9),
  imperativeInformal: Word('предпочитай', 9),
  imperativeFormal: Word('предпочитайте', 9),
  imperfect: ['предпочесть'],
};

perfectVerbs.set(предпочитать.name.text, предпочитать);

export { предпочитать };