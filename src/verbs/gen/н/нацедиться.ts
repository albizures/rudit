import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацедиться: PerfectVerb = {
  name: Word('нацедиться', 5),
  singular1stPerson: Word('нацежусь', 5),
  singular2ndPerson: Word('нацедишься', 3),
  singular3rdPerson: Word('нацедится', 3),
  plural1stPerson: Word('нацедимся', 3),
  plural2ndPerson: Word('нацедитесь', 3),
  plural3rdPerson: Word('нацедятся', 3),
  masculinePast: Word('нацедился', 5),
  femininePast: Word('нацедилась', 5),
  neuterPast: Word('нацедилось', 5),
  pluralPast: Word('нацедились', 5),
  imperativeInformal: Word('нацедись', 5),
  imperativeFormal: Word('нацедитесь', 5),
  imperfect: [],
};

perfectVerbs.set(нацедиться.name.text, нацедиться);

export { нацедиться };