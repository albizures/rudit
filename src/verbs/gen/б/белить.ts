import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const белить: PerfectVerb = {
  name: Word('белить', 3),
  singular1stPerson: Word('белю', 3),
  singular2ndPerson: Word('белишь', 1),
  singular3rdPerson: Word('белит', 1),
  plural1stPerson: Word('белим', 1),
  plural2ndPerson: Word('белите', 1),
  plural3rdPerson: Word('белят', 1),
  masculinePast: Word('белил', 3),
  femininePast: Word('белила', 3),
  neuterPast: Word('белило', 3),
  pluralPast: Word('белили', 3),
  imperativeInformal: Word('бели', 3),
  imperativeFormal: Word('белите', 3),
  imperfect: [],
};

perfectVerbs.set(белить.name.text, белить);

export { белить };