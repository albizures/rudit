import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охмурять: PerfectVerb = {
  name: Word('охмурять', 5),
  singular1stPerson: Word('охмуряю', 5),
  singular2ndPerson: Word('охмуряешь', 5),
  singular3rdPerson: Word('охмуряет', 5),
  plural1stPerson: Word('охмуряем', 5),
  plural2ndPerson: Word('охмуряете', 5),
  plural3rdPerson: Word('охмуряют', 5),
  masculinePast: Word('охмурял', 5),
  femininePast: Word('охмуряла', 5),
  neuterPast: Word('охмуряло', 5),
  pluralPast: Word('охмуряли', 5),
  imperativeInformal: Word('охмуряй', 5),
  imperativeFormal: Word('охмуряйте', 5),
  imperfect: [],
};

perfectVerbs.set(охмурять.name.text, охмурять);

export { охмурять };