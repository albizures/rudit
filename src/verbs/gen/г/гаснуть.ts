import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гаснуть: PerfectVerb = {
  name: Word('гаснуть', 1),
  singular1stPerson: Word('гасну', 1),
  singular2ndPerson: Word('гаснешь', 1),
  singular3rdPerson: Word('гаснет', 1),
  plural1stPerson: Word('гаснем', 1),
  plural2ndPerson: Word('гаснете', 1),
  plural3rdPerson: Word('гаснут', 1),
  masculinePast: Word('гас,га'снул', 1),
  femininePast: Word('гасла,га'снула', 1),
  neuterPast: Word('гасло,га'снуло', 1),
  pluralPast: Word('гасли,га'снули', 1),
  imperativeInformal: Word('гасни', 1),
  imperativeFormal: Word('гасните', 1),
  imperfect: ['погаснуть'],
};

perfectVerbs.set(гаснуть.name.text, гаснуть);

export { гаснуть };