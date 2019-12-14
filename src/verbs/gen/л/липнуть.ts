import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const липнуть: PerfectVerb = {
  name: Word('липнуть', 1),
  singular1stPerson: Word('липну', 1),
  singular2ndPerson: Word('липнешь', 1),
  singular3rdPerson: Word('липнет', 1),
  plural1stPerson: Word('липнем', 1),
  plural2ndPerson: Word('липнете', 1),
  plural3rdPerson: Word('липнут', 1),
  masculinePast: Word('лип//ли'пнул', 1),
  femininePast: Word('липла', 1),
  neuterPast: Word('липло', 1),
  pluralPast: Word('липли', 1),
  imperativeInformal: Word('липни', 1),
  imperativeFormal: Word('липните', 1),
  imperfect: [],
};

perfectVerbs.set(липнуть.name.text, липнуть);

export { липнуть };