import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крутиться: PerfectVerb = {
  name: Word('крутиться', 4),
  singular1stPerson: Word('кручусь', 4),
  singular2ndPerson: Word('крутишься', 2),
  singular3rdPerson: Word('крутится', 2),
  plural1stPerson: Word('крутимся', 2),
  plural2ndPerson: Word('крутитесь', 2),
  plural3rdPerson: Word('крутятся', 2),
  masculinePast: Word('крутился', 4),
  femininePast: Word('крутилась', 4),
  neuterPast: Word('крутилось', 4),
  pluralPast: Word('крутились', 4),
  imperativeInformal: Word('крутись', 4),
  imperativeFormal: Word('крутитесь', 4),
  imperfect: [],
};

perfectVerbs.set(крутиться.name.text, крутиться);

export { крутиться };