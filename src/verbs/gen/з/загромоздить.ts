import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загромоздить: PerfectVerb = {
  name: Word('загромоздить', 9),
  singular1stPerson: Word('загромозжу', 9),
  singular2ndPerson: Word('загромоздишь', 9),
  singular3rdPerson: Word('загромоздит', 9),
  plural1stPerson: Word('загромоздим', 9),
  plural2ndPerson: Word('загромоздите', 9),
  plural3rdPerson: Word('загромоздят', 9),
  masculinePast: Word('загромоздил', 9),
  femininePast: Word('загромоздила', 9),
  neuterPast: Word('загромоздило', 9),
  pluralPast: Word('загромоздили', 9),
  imperativeInformal: Word('загромозди', 9),
  imperativeFormal: Word('загромоздите', 9),
  imperfect: [],
};

perfectVerbs.set(загромоздить.name.text, загромоздить);

export { загромоздить };