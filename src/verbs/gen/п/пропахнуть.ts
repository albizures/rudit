import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропахнуть: PerfectVerb = {
  name: Word('пропахнуть', 4),
  singular1stPerson: Word('пропахну', 4),
  singular2ndPerson: Word('пропахнешь', 4),
  singular3rdPerson: Word('пропахнет', 4),
  plural1stPerson: Word('пропахнем', 4),
  plural2ndPerson: Word('пропахнете', 4),
  plural3rdPerson: Word('пропахнут', 4),
  masculinePast: Word('пропах', 4),
  femininePast: Word('пропахла', 4),
  neuterPast: Word('пропахло', 4),
  pluralPast: Word('пропахли', 4),
  imperativeInformal: Word('пропахни', 4),
  imperativeFormal: Word('пропахните', 4),
  imperfect: [],
};

perfectVerbs.set(пропахнуть.name.text, пропахнуть);

export { пропахнуть };