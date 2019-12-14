import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагреваться: PerfectVerb = {
  name: Word('нагреваться', 6),
  singular1stPerson: Word('нагреваюсь', 6),
  singular2ndPerson: Word('нагреваешься', 6),
  singular3rdPerson: Word('нагревается', 6),
  plural1stPerson: Word('нагреваемся', 6),
  plural2ndPerson: Word('нагреваетесь', 6),
  plural3rdPerson: Word('нагреваются', 6),
  masculinePast: Word('нагревался', 6),
  femininePast: Word('нагревалась', 6),
  neuterPast: Word('нагревалось', 6),
  pluralPast: Word('нагревались', 6),
  imperativeInformal: Word('нагревайся', 6),
  imperativeFormal: Word('нагревайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(нагреваться.name.text, нагреваться);

export { нагреваться };