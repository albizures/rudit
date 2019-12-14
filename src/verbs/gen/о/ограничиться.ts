import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ограничиться: PerfectVerb = {
  name: Word('ограничиться', 5),
  singular1stPerson: Word('ограничусь', 5),
  singular2ndPerson: Word('ограничишься', 5),
  singular3rdPerson: Word('ограничится', 5),
  plural1stPerson: Word('ограничимся', 5),
  plural2ndPerson: Word('ограничитесь', 5),
  plural3rdPerson: Word('ограничатся', 5),
  masculinePast: Word('ограничился', 5),
  femininePast: Word('ограничилась', 5),
  neuterPast: Word('ограничилось', 5),
  pluralPast: Word('ограничились', 5),
  imperativeInformal: Word('ограничься', 5),
  imperativeFormal: Word('ограничьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ограничиться.name.text, ограничиться);

export { ограничиться };