import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспламенять: PerfectVerb = {
  name: Word('воспламенять', 9),
  singular1stPerson: Word('воспламеняю', 9),
  singular2ndPerson: Word('воспламеняешь', 9),
  singular3rdPerson: Word('воспламеняет', 9),
  plural1stPerson: Word('воспламеняем', 9),
  plural2ndPerson: Word('воспламеняете', 9),
  plural3rdPerson: Word('воспламеняют', 9),
  masculinePast: Word('воспламенял', 9),
  femininePast: Word('воспламеняла', 9),
  neuterPast: Word('воспламеняло', 9),
  pluralPast: Word('воспламеняли', 9),
  imperativeInformal: Word('воспламеняй', 9),
  imperativeFormal: Word('воспламеняйте', 9),
  imperfect: [],
};

perfectVerbs.set(воспламенять.name.text, воспламенять);

export { воспламенять };