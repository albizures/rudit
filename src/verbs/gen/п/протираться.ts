import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протираться: PerfectVerb = {
  name: Word('протираться', 6),
  singular1stPerson: Word('протираюсь', 6),
  singular2ndPerson: Word('протираешься', 6),
  singular3rdPerson: Word('протирается', 6),
  plural1stPerson: Word('протираемся', 6),
  plural2ndPerson: Word('протираетесь', 6),
  plural3rdPerson: Word('протираются', 6),
  masculinePast: Word('протирался', 6),
  femininePast: Word('протиралась', 6),
  neuterPast: Word('протиралось', 6),
  pluralPast: Word('протирались', 6),
  imperativeInformal: Word('протирайся', 6),
  imperativeFormal: Word('протирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(протираться.name.text, протираться);

export { протираться };