import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вообразиться: PerfectVerb = {
  name: Word('вообразиться', 7),
  singular1stPerson: Word('воображусь', 7),
  singular2ndPerson: Word('вообразишься', 7),
  singular3rdPerson: Word('вообразится', 7),
  plural1stPerson: Word('вообразимся', 7),
  plural2ndPerson: Word('вообразитесь', 7),
  plural3rdPerson: Word('вообразятся', 7),
  masculinePast: Word('вообразился', 7),
  femininePast: Word('вообразилась', 7),
  neuterPast: Word('вообразилось', 7),
  pluralPast: Word('вообразились', 7),
  imperativeInformal: Word('вообразись', 7),
  imperativeFormal: Word('вообразитесь', 7),
  imperfect: [],
};

perfectVerbs.set(вообразиться.name.text, вообразиться);

export { вообразиться };