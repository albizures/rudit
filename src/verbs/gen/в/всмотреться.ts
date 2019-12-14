import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всмотреться: PerfectVerb = {
  name: Word('всмотреться', 6),
  singular1stPerson: Word('всмотрюсь', 6),
  singular2ndPerson: Word('всмотришься', 3),
  singular3rdPerson: Word('всмотрится', 3),
  plural1stPerson: Word('всмотримся', 3),
  plural2ndPerson: Word('всмотритесь', 3),
  plural3rdPerson: Word('всмотрятся', 3),
  masculinePast: Word('всмотрелся', 6),
  femininePast: Word('всмотрелась', 6),
  neuterPast: Word('всмотрелось', 6),
  pluralPast: Word('всмотрелись', 6),
  imperativeInformal: Word('всмотрись', 6),
  imperativeFormal: Word('всмотритесь', 6),
  imperfect: [],
};

perfectVerbs.set(всмотреться.name.text, всмотреться);

export { всмотреться };