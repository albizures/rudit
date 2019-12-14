import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цениться: PerfectVerb = {
  name: Word('цениться', 3),
  singular1stPerson: Word('ценюсь', 3),
  singular2ndPerson: Word('ценишься', 1),
  singular3rdPerson: Word('ценится', 1),
  plural1stPerson: Word('ценимся', 1),
  plural2ndPerson: Word('ценитесь', 1),
  plural3rdPerson: Word('ценятся', 1),
  masculinePast: Word('ценился', 3),
  femininePast: Word('ценилась', 3),
  neuterPast: Word('ценилось', 3),
  pluralPast: Word('ценились', 3),
  imperativeInformal: Word('ценись', 3),
  imperativeFormal: Word('ценитесь', 3),
  imperfect: [],
};

perfectVerbs.set(цениться.name.text, цениться);

export { цениться };