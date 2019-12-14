import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнурять: PerfectVerb = {
  name: Word('изнурять', 5),
  singular1stPerson: Word('изнуряю', 5),
  singular2ndPerson: Word('изнуряешь', 5),
  singular3rdPerson: Word('изнуряет', 5),
  plural1stPerson: Word('изнуряем', 5),
  plural2ndPerson: Word('изнуряете', 5),
  plural3rdPerson: Word('изнуряют', 5),
  masculinePast: Word('изнурял', 5),
  femininePast: Word('изнуряла', 5),
  neuterPast: Word('изнуряло', 5),
  pluralPast: Word('изнуряли', 5),
  imperativeInformal: Word('изнуряй', 5),
  imperativeFormal: Word('изнуряйте', 5),
  imperfect: ['изнурить'],
};

perfectVerbs.set(изнурять.name.text, изнурять);

export { изнурять };