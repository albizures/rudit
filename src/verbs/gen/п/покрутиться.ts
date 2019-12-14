import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрутиться: PerfectVerb = {
  name: Word('покрутиться', 6),
  singular1stPerson: Word('покручусь', 6),
  singular2ndPerson: Word('покрутишься', 4),
  singular3rdPerson: Word('покрутится', 4),
  plural1stPerson: Word('покрутимся', 4),
  plural2ndPerson: Word('покрутитесь', 4),
  plural3rdPerson: Word('покрутятся', 4),
  masculinePast: Word('покрутился', 6),
  femininePast: Word('покрутилась', 6),
  neuterPast: Word('покрутилось', 6),
  pluralPast: Word('покрутились', 6),
  imperativeInformal: Word('покрутись', 6),
  imperativeFormal: Word('покрутитесь', 6),
  imperfect: [],
};

perfectVerbs.set(покрутиться.name.text, покрутиться);

export { покрутиться };