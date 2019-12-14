import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умилиться: PerfectVerb = {
  name: Word('умилиться', 4),
  singular1stPerson: Word('умилюсь', 4),
  singular2ndPerson: Word('умилишься', 4),
  singular3rdPerson: Word('умилится', 4),
  plural1stPerson: Word('умилимся', 4),
  plural2ndPerson: Word('умилитесь', 4),
  plural3rdPerson: Word('умилятся', 4),
  masculinePast: Word('умилился', 4),
  femininePast: Word('умилилась', 4),
  neuterPast: Word('умилилось', 4),
  pluralPast: Word('умилились', 4),
  imperativeInformal: Word('умились', 4),
  imperativeFormal: Word('умилитесь', 4),
  imperfect: [],
};

perfectVerbs.set(умилиться.name.text, умилиться);

export { умилиться };