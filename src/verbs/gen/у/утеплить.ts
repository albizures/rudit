import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утеплить: PerfectVerb = {
  name: Word('утеплить', 5),
  singular1stPerson: Word('утеплю', 5),
  singular2ndPerson: Word('утеплишь', 5),
  singular3rdPerson: Word('утеплит', 5),
  plural1stPerson: Word('утеплим', 5),
  plural2ndPerson: Word('утеплите', 5),
  plural3rdPerson: Word('утеплят', 5),
  masculinePast: Word('утеплил', 5),
  femininePast: Word('утеплила', 5),
  neuterPast: Word('утеплило', 5),
  pluralPast: Word('утеплили', 5),
  imperativeInformal: Word('утепли', 5),
  imperativeFormal: Word('утеплите', 5),
  imperfect: [],
};

perfectVerbs.set(утеплить.name.text, утеплить);

export { утеплить };