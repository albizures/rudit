import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезарядить: PerfectVerb = {
  name: Word('перезарядить', 9),
  singular1stPerson: Word('перезаряжу', 9),
  singular2ndPerson: Word('перезарядишь', 9),
  singular3rdPerson: Word('перезарядит', 9),
  plural1stPerson: Word('перезарядим', 9),
  plural2ndPerson: Word('перезарядите', 9),
  plural3rdPerson: Word('перезарядят', 9),
  masculinePast: Word('перезарядил', 9),
  femininePast: Word('перезарядила', 9),
  neuterPast: Word('перезарядило', 9),
  pluralPast: Word('перезарядили', 9),
  imperativeInformal: Word('перезаряди', 9),
  imperativeFormal: Word('перезарядите', 9),
  imperfect: [],
};

perfectVerbs.set(перезарядить.name.text, перезарядить);

export { перезарядить };