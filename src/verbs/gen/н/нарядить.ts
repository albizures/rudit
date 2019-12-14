import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарядить: PerfectVerb = {
  name: Word('нарядить', 5),
  singular1stPerson: Word('наряжу', 5),
  singular2ndPerson: Word('нарядишь', 3),
  singular3rdPerson: Word('нарядит', 3),
  plural1stPerson: Word('нарядим', 3),
  plural2ndPerson: Word('нарядите', 3),
  plural3rdPerson: Word('нарядят', 3),
  masculinePast: Word('нарядил', 5),
  femininePast: Word('нарядила', 5),
  neuterPast: Word('нарядило', 5),
  pluralPast: Word('нарядили', 5),
  imperativeInformal: Word('наряди', 5),
  imperativeFormal: Word('нарядите', 5),
  imperfect: ['наряжать'],
};

perfectVerbs.set(нарядить.name.text, нарядить);

export { нарядить };