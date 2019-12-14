import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завонять: PerfectVerb = {
  name: Word('завонять', 5),
  singular1stPerson: Word('завоняю', 5),
  singular2ndPerson: Word('завоняешь', 5),
  singular3rdPerson: Word('завоняет', 5),
  plural1stPerson: Word('завоняем', 5),
  plural2ndPerson: Word('завоняете', 5),
  plural3rdPerson: Word('завоняют', 5),
  masculinePast: Word('завонял', 5),
  femininePast: Word('завоняла', 5),
  neuterPast: Word('завоняло', 5),
  pluralPast: Word('завоняли', 5),
  imperativeInformal: Word('завоняй', 5),
  imperativeFormal: Word('завоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(завонять.name.text, завонять);

export { завонять };