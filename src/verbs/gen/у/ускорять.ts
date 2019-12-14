import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ускорять: PerfectVerb = {
  name: Word('ускорять', 5),
  singular1stPerson: Word('ускоряю', 5),
  singular2ndPerson: Word('ускоряешь', 5),
  singular3rdPerson: Word('ускоряет', 5),
  plural1stPerson: Word('ускоряем', 5),
  plural2ndPerson: Word('ускоряете', 5),
  plural3rdPerson: Word('ускоряют', 5),
  masculinePast: Word('ускорял', 5),
  femininePast: Word('ускоряла', 5),
  neuterPast: Word('ускоряло', 5),
  pluralPast: Word('ускоряли', 5),
  imperativeInformal: Word('ускоряй', 5),
  imperativeFormal: Word('ускоряйте', 5),
  imperfect: ['ускорить'],
};

perfectVerbs.set(ускорять.name.text, ускорять);

export { ускорять };