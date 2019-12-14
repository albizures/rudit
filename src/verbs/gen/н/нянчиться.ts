import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нянчиться: PerfectVerb = {
  name: Word('нянчиться', 1),
  singular1stPerson: Word('нянчусь', 1),
  singular2ndPerson: Word('нянчишься', 1),
  singular3rdPerson: Word('нянчится', 1),
  plural1stPerson: Word('нянчимся', 1),
  plural2ndPerson: Word('нянчитесь', 1),
  plural3rdPerson: Word('нянчатся', 1),
  masculinePast: Word('нянчился', 1),
  femininePast: Word('нянчилась', 1),
  neuterPast: Word('нянчилось', 1),
  pluralPast: Word('нянчились', 1),
  imperativeInformal: Word('нянчись', 1),
  imperativeFormal: Word('нянчитесь', 1),
  imperfect: [],
};

perfectVerbs.set(нянчиться.name.text, нянчиться);

export { нянчиться };