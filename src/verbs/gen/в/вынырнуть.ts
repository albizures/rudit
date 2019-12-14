import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынырнуть: PerfectVerb = {
  name: Word('вынырнуть', 1),
  singular1stPerson: Word('вынырну', 1),
  singular2ndPerson: Word('вынырнешь', 1),
  singular3rdPerson: Word('вынырнет', 1),
  plural1stPerson: Word('вынырнем', 1),
  plural2ndPerson: Word('вынырнете', 1),
  plural3rdPerson: Word('вынырнут', 1),
  masculinePast: Word('вынырнул', 1),
  femininePast: Word('вынырнула', 1),
  neuterPast: Word('вынырнуло', 1),
  pluralPast: Word('вынырнули', 1),
  imperativeInformal: Word('вынырни', 1),
  imperativeFormal: Word('вынырните', 1),
  imperfect: [],
};

perfectVerbs.set(вынырнуть.name.text, вынырнуть);

export { вынырнуть };