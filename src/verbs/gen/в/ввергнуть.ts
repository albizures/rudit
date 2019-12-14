import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввергнуть: PerfectVerb = {
  name: Word('ввергнуть', 2),
  singular1stPerson: Word('ввергну', 2),
  singular2ndPerson: Word('ввергнешь', 2),
  singular3rdPerson: Word('ввергнет', 2),
  plural1stPerson: Word('ввергнем', 2),
  plural2ndPerson: Word('ввергнете', 2),
  plural3rdPerson: Word('ввергнут', 2),
  masculinePast: Word('вверг//вве'ргнул', 2),
  femininePast: Word('ввергла', 2),
  neuterPast: Word('ввергло', 2),
  pluralPast: Word('ввергли', 2),
  imperativeInformal: Word('ввергни', 2),
  imperativeFormal: Word('ввергните', 2),
  imperfect: [],
};

perfectVerbs.set(ввергнуть.name.text, ввергнуть);

export { ввергнуть };