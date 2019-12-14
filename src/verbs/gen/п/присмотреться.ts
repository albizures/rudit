import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присмотреться: PerfectVerb = {
  name: Word('присмотреться', 8),
  singular1stPerson: Word('присмотрюсь', 8),
  singular2ndPerson: Word('присмотришься', 5),
  singular3rdPerson: Word('присмотрится', 5),
  plural1stPerson: Word('присмотримся', 5),
  plural2ndPerson: Word('присмотритесь', 5),
  plural3rdPerson: Word('присмотрятся', 5),
  masculinePast: Word('присмотрелся', 8),
  femininePast: Word('присмотрелась', 8),
  neuterPast: Word('присмотрелось', 8),
  pluralPast: Word('присмотрелись', 8),
  imperativeInformal: Word('присмотрись', 8),
  imperativeFormal: Word('присмотритесь', 8),
  imperfect: [],
};

perfectVerbs.set(присмотреться.name.text, присмотреться);

export { присмотреться };