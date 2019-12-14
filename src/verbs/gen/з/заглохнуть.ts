import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглохнуть: PerfectVerb = {
  name: Word('заглохнуть', 4),
  singular1stPerson: Word('заглохну', 4),
  singular2ndPerson: Word('заглохнешь', 4),
  singular3rdPerson: Word('заглохнет', 4),
  plural1stPerson: Word('заглохнем', 4),
  plural2ndPerson: Word('заглохнете', 4),
  plural3rdPerson: Word('заглохнут', 4),
  masculinePast: Word('заглох', 4),
  femininePast: Word('заглохла', 4),
  neuterPast: Word('заглохло', 4),
  pluralPast: Word('заглохли', 4),
  imperativeInformal: Word('заглохни', 4),
  imperativeFormal: Word('заглохните', 4),
  imperfect: [],
};

perfectVerbs.set(заглохнуть.name.text, заглохнуть);

export { заглохнуть };