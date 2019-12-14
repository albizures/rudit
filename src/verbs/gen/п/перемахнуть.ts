import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемахнуть: PerfectVerb = {
  name: Word('перемахнуть', 8),
  singular1stPerson: Word('перемахну', 8),
  singular2ndPerson: Word('перемахнёшь', 5),
  singular3rdPerson: Word('перемахнёт', 5),
  plural1stPerson: Word('перемахнём', 5),
  plural2ndPerson: Word('перемахнёте', 5),
  plural3rdPerson: Word('перемахнут', 8),
  masculinePast: Word('перемахнул', 8),
  femininePast: Word('перемахнула', 8),
  neuterPast: Word('перемахнуло', 8),
  pluralPast: Word('перемахнули', 8),
  imperativeInformal: Word('перемахни', 8),
  imperativeFormal: Word('перемахните', 8),
  imperfect: [],
};

perfectVerbs.set(перемахнуть.name.text, перемахнуть);

export { перемахнуть };