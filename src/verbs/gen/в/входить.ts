import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const входить: PerfectVerb = {
  name: Word('входить', 4),
  singular1stPerson: Word('вхожу', 4),
  singular2ndPerson: Word('входишь', 2),
  singular3rdPerson: Word('входит', 2),
  plural1stPerson: Word('входим', 2),
  plural2ndPerson: Word('входите', 2),
  plural3rdPerson: Word('входят', 2),
  masculinePast: Word('входил', 4),
  femininePast: Word('входила', 4),
  neuterPast: Word('входило', 4),
  pluralPast: Word('входили', 4),
  imperativeInformal: Word('входи', 4),
  imperativeFormal: Word('входите', 4),
  imperfect: ['войти'],
};

perfectVerbs.set(входить.name.text, входить);

export { входить };