import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскорузнуть: PerfectVerb = {
  name: Word('заскорузнуть', 6),
  singular1stPerson: Word('заскорузну', 6),
  singular2ndPerson: Word('заскорузнешь', 6),
  singular3rdPerson: Word('заскорузнет', 6),
  plural1stPerson: Word('заскорузнем', 6),
  plural2ndPerson: Word('заскорузнете', 6),
  plural3rdPerson: Word('заскорузнут', 6),
  masculinePast: Word('заскоруз', 6),
  femininePast: Word('заскорузла', 6),
  neuterPast: Word('заскорузло', 6),
  pluralPast: Word('заскорузли', 6),
  imperativeInformal: Word('заскорузни', 6),
  imperativeFormal: Word('заскорузните', 6),
  imperfect: [],
};

perfectVerbs.set(заскорузнуть.name.text, заскорузнуть);

export { заскорузнуть };