import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насмотреться: PerfectVerb = {
  name: Word('насмотреться', 7),
  singular1stPerson: Word('насмотрюсь', 7),
  singular2ndPerson: Word('насмотришься', 4),
  singular3rdPerson: Word('насмотрится', 4),
  plural1stPerson: Word('насмотримся', 4),
  plural2ndPerson: Word('насмотритесь', 4),
  plural3rdPerson: Word('насмотрятся', 4),
  masculinePast: Word('насмотрелся', 7),
  femininePast: Word('насмотрелась', 7),
  neuterPast: Word('насмотрелось', 7),
  pluralPast: Word('насмотрелись', 7),
  imperativeInformal: Word('насмотрись', 7),
  imperativeFormal: Word('насмотритесь', 7),
  imperfect: [],
};

perfectVerbs.set(насмотреться.name.text, насмотреться);

export { насмотреться };