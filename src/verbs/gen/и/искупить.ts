import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искупить: PerfectVerb = {
  name: Word('искупить', 5),
  singular1stPerson: Word('искуплю', 6),
  singular2ndPerson: Word('искупишь', 3),
  singular3rdPerson: Word('искупит', 3),
  plural1stPerson: Word('искупим', 3),
  plural2ndPerson: Word('искупите', 3),
  plural3rdPerson: Word('искупят', 3),
  masculinePast: Word('искупил', 5),
  femininePast: Word('искупила', 5),
  neuterPast: Word('искупило', 5),
  pluralPast: Word('искупили', 5),
  imperativeInformal: Word('искупи', 5),
  imperativeFormal: Word('искупите', 5),
  imperfect: ['искупать'],
};

perfectVerbs.set(искупить.name.text, искупить);

export { искупить };