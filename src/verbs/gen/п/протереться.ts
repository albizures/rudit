import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протереться: PerfectVerb = {
  name: Word('протереться', 6),
  singular1stPerson: Word('протрусь', 5),
  singular2ndPerson: Word('протрёшься', 2),
  singular3rdPerson: Word('протрётся', 2),
  plural1stPerson: Word('протрёмся', 2),
  plural2ndPerson: Word('протрётесь', 7),
  plural3rdPerson: Word('протрутся', 5),
  masculinePast: Word('протерся', 4),
  femininePast: Word('протерлась', 4),
  neuterPast: Word('протерлось', 4),
  pluralPast: Word('протерлись', 4),
  imperativeInformal: Word('протрись', 5),
  imperativeFormal: Word('протритесь', 5),
  imperfect: [],
};

perfectVerbs.set(протереться.name.text, протереться);

export { протереться };