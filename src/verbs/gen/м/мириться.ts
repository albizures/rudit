import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мириться: PerfectVerb = {
  name: Word('мириться', 3),
  singular1stPerson: Word('мирюсь', 3),
  singular2ndPerson: Word('миришься', 3),
  singular3rdPerson: Word('мирится', 3),
  plural1stPerson: Word('миримся', 3),
  plural2ndPerson: Word('миритесь', 3),
  plural3rdPerson: Word('мирятся', 3),
  masculinePast: Word('мирился', 3),
  femininePast: Word('мирилась', 3),
  neuterPast: Word('мирилось', 3),
  pluralPast: Word('мирились', 3),
  imperativeInformal: Word('мирись', 3),
  imperativeFormal: Word('миритесь', 3),
  imperfect: [],
};

perfectVerbs.set(мириться.name.text, мириться);

export { мириться };