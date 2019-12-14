import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усмирять: PerfectVerb = {
  name: Word('усмирять', 5),
  singular1stPerson: Word('усмиряю', 5),
  singular2ndPerson: Word('усмиряешь', 5),
  singular3rdPerson: Word('усмиряет', 5),
  plural1stPerson: Word('усмиряем', 5),
  plural2ndPerson: Word('усмиряете', 5),
  plural3rdPerson: Word('усмиряют', 5),
  masculinePast: Word('усмирял', 5),
  femininePast: Word('усмиряла', 5),
  neuterPast: Word('усмиряло', 5),
  pluralPast: Word('усмиряли', 5),
  imperativeInformal: Word('усмиряй', 5),
  imperativeFormal: Word('усмиряйте', 5),
  imperfect: [],
};

perfectVerbs.set(усмирять.name.text, усмирять);

export { усмирять };