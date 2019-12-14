import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлебнуть: PerfectVerb = {
  name: Word('хлебнуть', 5),
  singular1stPerson: Word('хлебну', 5),
  singular2ndPerson: Word('хлебнёшь', 2),
  singular3rdPerson: Word('хлебнёт', 2),
  plural1stPerson: Word('хлебнём', 2),
  plural2ndPerson: Word('хлебнёте', 2),
  plural3rdPerson: Word('хлебнут', 5),
  masculinePast: Word('хлебнул', 5),
  femininePast: Word('хлебнула', 5),
  neuterPast: Word('хлебнуло', 5),
  pluralPast: Word('хлебнули', 5),
  imperativeInformal: Word('хлебни', 5),
  imperativeFormal: Word('хлебните', 5),
  imperfect: [],
};

perfectVerbs.set(хлебнуть.name.text, хлебнуть);

export { хлебнуть };