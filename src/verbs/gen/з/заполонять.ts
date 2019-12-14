import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заполонять: PerfectVerb = {
  name: Word('заполонять', 7),
  singular1stPerson: Word('заполоняю', 7),
  singular2ndPerson: Word('заполоняешь', 7),
  singular3rdPerson: Word('заполоняет', 7),
  plural1stPerson: Word('заполоняем', 7),
  plural2ndPerson: Word('заполоняете', 7),
  plural3rdPerson: Word('заполоняют', 7),
  masculinePast: Word('заполонял', 7),
  femininePast: Word('заполоняла', 7),
  neuterPast: Word('заполоняло', 7),
  pluralPast: Word('заполоняли', 7),
  imperativeInformal: Word('заполоняй', 7),
  imperativeFormal: Word('заполоняйте', 7),
  imperfect: [],
};

perfectVerbs.set(заполонять.name.text, заполонять);

export { заполонять };