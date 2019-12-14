import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изводить: PerfectVerb = {
  name: Word('изводить', 5),
  singular1stPerson: Word('извожу', 5),
  singular2ndPerson: Word('изводишь', 3),
  singular3rdPerson: Word('изводит', 3),
  plural1stPerson: Word('изводим', 3),
  plural2ndPerson: Word('изводите', 3),
  plural3rdPerson: Word('изводят', 3),
  masculinePast: Word('изводил', 5),
  femininePast: Word('изводила', 5),
  neuterPast: Word('изводило', 5),
  pluralPast: Word('изводили', 5),
  imperativeInformal: Word('изводи', 5),
  imperativeFormal: Word('изводите', 5),
  imperfect: ['извести'],
};

perfectVerbs.set(изводить.name.text, изводить);

export { изводить };