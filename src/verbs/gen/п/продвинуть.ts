import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продвинуть: PerfectVerb = {
  name: Word('продвинуть', 5),
  singular1stPerson: Word('продвину', 5),
  singular2ndPerson: Word('продвинешь', 5),
  singular3rdPerson: Word('продвинет', 5),
  plural1stPerson: Word('продвинем', 5),
  plural2ndPerson: Word('продвинете', 5),
  plural3rdPerson: Word('продвинут', 5),
  masculinePast: Word('продвинул', 5),
  femininePast: Word('продвинула', 5),
  neuterPast: Word('продвинуло', 5),
  pluralPast: Word('продвинули', 5),
  imperativeInformal: Word('продвинь', 5),
  imperativeFormal: Word('продвиньте', 5),
  imperfect: ['продвигать'],
};

perfectVerbs.set(продвинуть.name.text, продвинуть);

export { продвинуть };