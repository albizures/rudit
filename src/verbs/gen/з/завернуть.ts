import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завернуть: PerfectVerb = {
  name: Word('завернуть', 6),
  singular1stPerson: Word('заверну', 6),
  singular2ndPerson: Word('завернёшь', 1),
  singular3rdPerson: Word('завернёт', 1),
  plural1stPerson: Word('завернём', 1),
  plural2ndPerson: Word('завернёте', 1),
  plural3rdPerson: Word('завернут', 6),
  masculinePast: Word('завернул', 6),
  femininePast: Word('завернула', 6),
  neuterPast: Word('завернуло', 6),
  pluralPast: Word('завернули', 6),
  imperativeInformal: Word('заверни', 6),
  imperativeFormal: Word('заверните', 6),
  imperfect: ['завёртывать','заворачивать'],
};

perfectVerbs.set(завернуть.name.text, завернуть);

export { завернуть };