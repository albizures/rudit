import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застеклить: PerfectVerb = {
  name: Word('застеклить', 7),
  singular1stPerson: Word('застеклю', 7),
  singular2ndPerson: Word('застеклишь', 7),
  singular3rdPerson: Word('застеклит', 7),
  plural1stPerson: Word('застеклим', 7),
  plural2ndPerson: Word('застеклите', 7),
  plural3rdPerson: Word('застеклят', 7),
  masculinePast: Word('застеклил', 7),
  femininePast: Word('застеклила', 7),
  neuterPast: Word('застеклило', 7),
  pluralPast: Word('застеклили', 7),
  imperativeInformal: Word('застекли', 7),
  imperativeFormal: Word('застеклите', 7),
  imperfect: [],
};

perfectVerbs.set(застеклить.name.text, застеклить);

export { застеклить };