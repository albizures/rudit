import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придвинуть: PerfectVerb = {
  name: Word('придвинуть', 5),
  singular1stPerson: Word('придвину', 5),
  singular2ndPerson: Word('придвинешь', 5),
  singular3rdPerson: Word('придвинет', 5),
  plural1stPerson: Word('придвинем', 5),
  plural2ndPerson: Word('придвинете', 5),
  plural3rdPerson: Word('придвинут', 5),
  masculinePast: Word('придвинул', 5),
  femininePast: Word('придвинула', 5),
  neuterPast: Word('придвинуло', 5),
  pluralPast: Word('придвинули', 5),
  imperativeInformal: Word('придвинь', 5),
  imperativeFormal: Word('придвиньте', 5),
  imperfect: [],
};

perfectVerbs.set(придвинуть.name.text, придвинуть);

export { придвинуть };