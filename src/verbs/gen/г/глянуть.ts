import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глянуть: PerfectVerb = {
  name: Word('глянуть', 2),
  singular1stPerson: Word('гляну', 2),
  singular2ndPerson: Word('глянешь', 2),
  singular3rdPerson: Word('глянет', 2),
  plural1stPerson: Word('глянем', 2),
  plural2ndPerson: Word('глянете', 2),
  plural3rdPerson: Word('глянут', 2),
  masculinePast: Word('глянул', 2),
  femininePast: Word('глянула', 2),
  neuterPast: Word('глянуло', 2),
  pluralPast: Word('глянули', 2),
  imperativeInformal: Word('глянь', 2),
  imperativeFormal: Word('гляньте', 2),
  imperfect: ['глядеть'],
};

perfectVerbs.set(глянуть.name.text, глянуть);

export { глянуть };