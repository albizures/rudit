import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искоренять: PerfectVerb = {
  name: Word('искоренять', 7),
  singular1stPerson: Word('искореняю', 7),
  singular2ndPerson: Word('искореняешь', 7),
  singular3rdPerson: Word('искореняет', 7),
  plural1stPerson: Word('искореняем', 7),
  plural2ndPerson: Word('искореняете', 7),
  plural3rdPerson: Word('искореняют', 7),
  masculinePast: Word('искоренял', 7),
  femininePast: Word('искореняла', 7),
  neuterPast: Word('искореняло', 7),
  pluralPast: Word('искореняли', 7),
  imperativeInformal: Word('искореняй', 7),
  imperativeFormal: Word('искореняйте', 7),
  imperfect: ['искоренить'],
};

perfectVerbs.set(искоренять.name.text, искоренять);

export { искоренять };