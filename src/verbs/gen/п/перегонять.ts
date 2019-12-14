import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегонять: PerfectVerb = {
  name: Word('перегонять', 7),
  singular1stPerson: Word('перегоняю', 7),
  singular2ndPerson: Word('перегоняешь', 7),
  singular3rdPerson: Word('перегоняет', 7),
  plural1stPerson: Word('перегоняем', 7),
  plural2ndPerson: Word('перегоняете', 7),
  plural3rdPerson: Word('перегоняют', 7),
  masculinePast: Word('перегонял', 7),
  femininePast: Word('перегоняла', 7),
  neuterPast: Word('перегоняло', 7),
  pluralPast: Word('перегоняли', 7),
  imperativeInformal: Word('перегоняй', 7),
  imperativeFormal: Word('перегоняйте', 7),
  imperfect: [],
};

perfectVerbs.set(перегонять.name.text, перегонять);

export { перегонять };