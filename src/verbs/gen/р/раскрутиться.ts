import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрутиться: PerfectVerb = {
  name: Word('раскрутиться', 7),
  singular1stPerson: Word('раскручусь', 7),
  singular2ndPerson: Word('раскрутишься', 5),
  singular3rdPerson: Word('раскрутится', 5),
  plural1stPerson: Word('раскрутимся', 5),
  plural2ndPerson: Word('раскрутитесь', 5),
  plural3rdPerson: Word('раскрутятся', 5),
  masculinePast: Word('раскрутился', 7),
  femininePast: Word('раскрутилась', 7),
  neuterPast: Word('раскрутилось', 7),
  pluralPast: Word('раскрутились', 7),
  imperativeInformal: Word('раскрутись', 7),
  imperativeFormal: Word('раскрутитесь', 7),
  imperfect: [],
};

perfectVerbs.set(раскрутиться.name.text, раскрутиться);

export { раскрутиться };