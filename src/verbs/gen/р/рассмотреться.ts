import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассмотреться: PerfectVerb = {
  name: Word('рассмотреться', 8),
  singular1stPerson: Word('рассмотрюсь', 8),
  singular2ndPerson: Word('рассмотришься', 5),
  singular3rdPerson: Word('рассмотрится', 5),
  plural1stPerson: Word('рассмотримся', 5),
  plural2ndPerson: Word('рассмотритесь', 5),
  plural3rdPerson: Word('рассмотрятся', 5),
  masculinePast: Word('рассмотрелся', 8),
  femininePast: Word('рассмотрелась', 8),
  neuterPast: Word('рассмотрелось', 8),
  pluralPast: Word('рассмотрелись', 8),
  imperativeInformal: Word('рассмотрись', 8),
  imperativeFormal: Word('рассмотритесь', 8),
  imperfect: ['рассматриваться'],
};

perfectVerbs.set(рассмотреться.name.text, рассмотреться);

export { рассмотреться };