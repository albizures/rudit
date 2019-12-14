import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоблачить: PerfectVerb = {
  name: Word('разоблачить', 8),
  singular1stPerson: Word('разоблачу', 8),
  singular2ndPerson: Word('разоблачишь', 8),
  singular3rdPerson: Word('разоблачит', 8),
  plural1stPerson: Word('разоблачим', 8),
  plural2ndPerson: Word('разоблачите', 8),
  plural3rdPerson: Word('разоблачат', 8),
  masculinePast: Word('разоблачил', 8),
  femininePast: Word('разоблачила', 8),
  neuterPast: Word('разоблачило', 8),
  pluralPast: Word('разоблачили', 8),
  imperativeInformal: Word('разоблачи', 8),
  imperativeFormal: Word('разоблачите', 8),
  imperfect: [],
};

perfectVerbs.set(разоблачить.name.text, разоблачить);

export { разоблачить };