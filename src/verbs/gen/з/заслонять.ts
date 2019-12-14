import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслонять: PerfectVerb = {
  name: Word('заслонять', 6),
  singular1stPerson: Word('заслоняю', 6),
  singular2ndPerson: Word('заслоняешь', 6),
  singular3rdPerson: Word('заслоняет', 6),
  plural1stPerson: Word('заслоняем', 6),
  plural2ndPerson: Word('заслоняете', 6),
  plural3rdPerson: Word('заслоняют', 6),
  masculinePast: Word('заслонял', 6),
  femininePast: Word('заслоняла', 6),
  neuterPast: Word('заслоняло', 6),
  pluralPast: Word('заслоняли', 6),
  imperativeInformal: Word('заслоняй', 6),
  imperativeFormal: Word('заслоняйте', 6),
  imperfect: [],
};

perfectVerbs.set(заслонять.name.text, заслонять);

export { заслонять };