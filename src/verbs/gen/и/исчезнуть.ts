import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчезнуть: PerfectVerb = {
  name: Word('исчезнуть', 3),
  singular1stPerson: Word('исчезну', 3),
  singular2ndPerson: Word('исчезнешь', 3),
  singular3rdPerson: Word('исчезнет', 3),
  plural1stPerson: Word('исчезнем', 3),
  plural2ndPerson: Word('исчезнете', 3),
  plural3rdPerson: Word('исчезнут', 3),
  masculinePast: Word('исчез', 3),
  femininePast: Word('исчезла,исче'знула', 3),
  neuterPast: Word('исчезло,исче'знуло', 3),
  pluralPast: Word('исчезли,исче'знули', 3),
  imperativeInformal: Word('исчезни', 3),
  imperativeFormal: Word('исчезните', 3),
  imperfect: ['исчезать'],
};

perfectVerbs.set(исчезнуть.name.text, исчезнуть);

export { исчезнуть };