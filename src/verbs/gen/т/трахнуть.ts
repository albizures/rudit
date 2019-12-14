import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трахнуть: PerfectVerb = {
  name: Word('трахнуть', 2),
  singular1stPerson: Word('трахну', 2),
  singular2ndPerson: Word('трахнешь', 2),
  singular3rdPerson: Word('трахнет', 2),
  plural1stPerson: Word('трахнем', 2),
  plural2ndPerson: Word('трахнете', 2),
  plural3rdPerson: Word('трахнут', 2),
  masculinePast: Word('трахнул', 2),
  femininePast: Word('трахнула', 2),
  neuterPast: Word('трахнуло', 2),
  pluralPast: Word('трахнули', 2),
  imperativeInformal: Word('трахни', 2),
  imperativeFormal: Word('трахните', 2),
  imperfect: [],
};

perfectVerbs.set(трахнуть.name.text, трахнуть);

export { трахнуть };