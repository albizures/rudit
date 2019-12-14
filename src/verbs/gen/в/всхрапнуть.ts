import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всхрапнуть: PerfectVerb = {
  name: Word('всхрапнуть', 7),
  singular1stPerson: Word('всхрапну', 7),
  singular2ndPerson: Word('всхрапнёшь', 7),
  singular3rdPerson: Word('всхрапнёт', 7),
  plural1stPerson: Word('всхрапнём', 7),
  plural2ndPerson: Word('всхрапнёте', 7),
  plural3rdPerson: Word('всхрапнут', 7),
  masculinePast: Word('всхрапнул', 7),
  femininePast: Word('всхрапнула', 7),
  neuterPast: Word('всхрапнуло', 7),
  pluralPast: Word('всхрапнули', 7),
  imperativeInformal: Word('всхрапни', 7),
  imperativeFormal: Word('всхрапните', 7),
  imperfect: [],
};

perfectVerbs.set(всхрапнуть.name.text, всхрапнуть);

export { всхрапнуть };