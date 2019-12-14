import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хрустнуть: PerfectVerb = {
  name: Word('хрустнуть', 2),
  singular1stPerson: Word('хрустну', 2),
  singular2ndPerson: Word('хрустнешь', 2),
  singular3rdPerson: Word('хрустнет', 2),
  plural1stPerson: Word('хрустнем', 2),
  plural2ndPerson: Word('хрустнете', 2),
  plural3rdPerson: Word('хрустнут', 2),
  masculinePast: Word('хрустнул', 2),
  femininePast: Word('хрустнула', 2),
  neuterPast: Word('хрустнуло', 2),
  pluralPast: Word('хрустнули', 2),
  imperativeInformal: Word('хрустни', 2),
  imperativeFormal: Word('хрустните', 2),
  imperfect: [],
};

perfectVerbs.set(хрустнуть.name.text, хрустнуть);

export { хрустнуть };