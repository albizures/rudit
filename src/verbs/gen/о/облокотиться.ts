import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облокотиться: PerfectVerb = {
  name: Word('облокотиться', 7),
  singular1stPerson: Word('облокочусь', 7),
  singular2ndPerson: Word('облокотишься', 5),
  singular3rdPerson: Word('облокотится', 5),
  plural1stPerson: Word('облокотимся', 5),
  plural2ndPerson: Word('облокотитесь', 5),
  plural3rdPerson: Word('облокотятся', 5),
  masculinePast: Word('облокотился', 7),
  femininePast: Word('облокотилась', 7),
  neuterPast: Word('облокотилось', 7),
  pluralPast: Word('облокотились', 7),
  imperativeInformal: Word('облокотись', 7),
  imperativeFormal: Word('облокотитесь', 7),
  imperfect: ['облокачиваться'],
};

perfectVerbs.set(облокотиться.name.text, облокотиться);

export { облокотиться };